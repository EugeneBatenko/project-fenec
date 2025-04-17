"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input } from "@/ui/form";
import { FormButton } from "@/ui/buttons/FormButton";
import Notice from "@/ui/notify/Notify";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      setNotification({ type: "success", message: "Login successful! Redirecting..." });
      router.push("/dashboard");
    } else {
      setNotification({ type: "danger", message: "Invalid credentials" });
    }
  };

  const resetNotification = () => {
    setNotification(null);
  };

  return (
    <section className="container">
      <div className="row align-items-center justify-content-center min-vh-100">
        <div className="col-md-6 col-12 text-center">
          <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {notification && (
              <Notice
                type={notification.type}
                message={notification.message}
                dismissible={true}
                key={notification.message}
                onDismiss={resetNotification}
              />
            )}
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <Input
              className="mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <FormButton type="submit" name="Login" />
          </Form>
        </div>
      </div>
    </section>
  );
}