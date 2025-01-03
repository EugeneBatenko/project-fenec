import {FC} from "react";

// @ts-expect-error Temporary ignore params type error before upgrade to 15th next
const Page: FC = async ({params}: { params: Promise<{ slug: string }> }) => {
    const slug: string = (await params).slug
    return <>
        <h1>Page: {slug}</h1>
    </>
}

export default Page;
