// CvEditor.tsx
"use client";

import { FC, FormEvent, useEffect, useState } from "react";
import { useCvMutation, useCvQuery } from "@/hooks/useCv";
import Notice from "@/components/ui/notify/Notify";
import { CvHeader, CvSection } from "@/types";
import { HeaderSections } from "./HeaderSections";     // adjust path as needed
import { MainSections } from "./MainSections";         // adjust path as needed

export const CvEditor: FC = () => {
    const mutation = useCvMutation();
    const { data: cvItems, isLoading, isError } = useCvQuery();

    const [noticeMessage, setNoticeMessage] = useState("");
    const [noticeType, setNoticeType] = useState("info");

    const [headerSections, setHeaderSections] = useState<CvHeader[]>([
        { title: "" },
    ]);
    const [sections, setSections] = useState<CvSection[]>([
        { title: "", content: "" },
    ]);

    useEffect(() => {
        if (cvItems && Array.isArray(cvItems)) {
            const fetchedHeaders = cvItems
                .filter((item) => item.type?.toLowerCase() === "header")
                .map((item) => ({ ...item }));

            const fetchedSections = cvItems
                .filter((item) => item.type?.toLowerCase() === "section")
                .map((item) => ({ ...item }));

            setHeaderSections(fetchedHeaders);
            setSections(fetchedSections);
        }
    }, [cvItems]);

    const handleAddHeaderSection = () => {
        setHeaderSections((prev) => [...prev, { title: "" }]);
    };

    const handleRemoveHeaderSection = (index: number) => {
        setHeaderSections((prev) => prev.filter((_, i) => i !== index));
    };

    const handleHeaderTitleChange = (index: number, newTitle: string) => {
        setHeaderSections((prev) =>
            prev.map((header, i) => (i === index ? { ...header, title: newTitle } : header))
        );
    };

    const handleAddSection = () => {
        setSections((prev) => [...prev, { title: "", content: "" }]);
    };

    const handleRemoveSection = (index: number) => {
        setSections((prev) => prev.filter((_, i) => i !== index));
    };

    const handleMoveSectionUp = (index: number) => {
        if (index <= 0) return;
        setSections((prev) => {
            const reordered = [...prev];
            [reordered[index - 1], reordered[index]] = [reordered[index], reordered[index - 1]];
            return reordered;
        });
    };

    const handleMoveSectionDown = (index: number) => {
        setSections((prev) => {
            if (index < 0 || index >= prev.length - 1) return prev;
            const reordered = [...prev];
            [reordered[index], reordered[index + 1]] = [reordered[index + 1], reordered[index]];
            return reordered;
        });
    };

    const handleSectionTitleChange = (index: number, newTitle: string) => {
        setSections((prev) =>
            prev.map((section, i) => (i === index ? { ...section, title: newTitle } : section))
        );
    };

    const handleSectionContentChange = (index: number, newContent: string) => {
        setSections((prev) =>
            prev.map((section, i) => (i === index ? { ...section, content: newContent } : section))
        );
    };

    // Submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const finalHeaders = headerSections.map((header, index) => ({
            ...header,
            order: index,
        }));
        const finalSections = sections.map((section, index) => ({
            ...section,
            order: index,
        }));

        const mergedData = {
            headers: finalHeaders,
            sections: finalSections,
        };

        console.log("Submitting merged data with order:", mergedData);

        await mutation.mutateAsync(mergedData);
        setNoticeMessage("Form successfully submitted!");
        setNoticeType("success");
    };

    return (
        <div style={{ padding: "1rem" }}>
            {noticeMessage && (
                <Notice
                    type={noticeType}
                    message={noticeMessage}
                    dismissible
                />
            )}
            <h1>Edit Your CV</h1>

            {isLoading && <div>Loading existing CV items...</div>}
            {isError && <div>Failed to load CV items.</div>}

            <form onSubmit={handleSubmit}>
                <HeaderSections
                    headerSections={headerSections}
                    onAddHeaderSection={handleAddHeaderSection}
                    onRemoveHeaderSection={handleRemoveHeaderSection}
                    onTitleChange={handleHeaderTitleChange}
                />

                <MainSections
                    sections={sections}
                    onAddSection={handleAddSection}
                    onRemoveSection={handleRemoveSection}
                    onMoveSectionUp={handleMoveSectionUp}
                    onMoveSectionDown={handleMoveSectionDown}
                    onTitleChange={handleSectionTitleChange}
                    onContentChange={handleSectionContentChange}
                />

                <br />
                <button type="submit">Save CV</button>
            </form>
        </div>
    );
};