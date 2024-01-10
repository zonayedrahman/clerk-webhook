import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-black text-white flex items-center justify-between px-16">
            <h2>Navbar</h2>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
                <div className="w-[150px] flex justify-between ">
                    <a href="/sign-in">Sign In</a>
                    <a href="/sign-up">Sign Up</a>
                </div>
            </SignedOut>
        </div>
    );
};

export default Navbar;
