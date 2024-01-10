import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <SignedIn>
                <div className="h-56 flex justify-center items-end">
                    <Link href="/create-task">
                        <Button>Add Task</Button>
                    </Link>
                </div>
            </SignedIn>
        </>
    );
}
