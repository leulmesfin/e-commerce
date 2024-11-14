import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import EyeToggle from "@/components/ui/EyeToggle";
import { Eye } from "lucide-react";

const SignUp = () => {
	return (
		<div className="flex items-center justify-center h-screen ">
			<Card className="w-[400px] h-[500px] shadow-xl rounded-3xl">
				<CardHeader className="flex items-center justify-center">
					<CardTitle>Create your account</CardTitle>
					<CardDescription>
						Welcome! Please fill in the details to get started.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center justify-center">
					<button className="flex gap-3 items-center justify-center border rounded-lg py-1 px-4 shadow-sm w-[70%] hover:bg-gray-100">
						<FcGoogle className="text-lg" />
						<p className="text-sm text-gray-600 font-medium">
							Continue with Google
						</p>
					</button>
				</CardContent>
				<div className="relative flex py-5 items-center justify-center ">
					<div className="w-32 border-t border-gray-200"></div>
					<span className="flex-shrink mx-4 text-gray-400">or</span>
					<div className="w-32 border-t border-gray-200"></div>
				</div>

				<div className="flex flex-col pl-5 pr-5 pb-5">
					<label className="text-sm text-gray-600 pb-1 pl-1">
						Email address
					</label>
					<input className="border rounded-lg py-1 px-4 shadow-sm"></input>

					<label className="text-sm text-gray-600 pb-1 pl-1 mt-5">
						Password
					</label>
					<input
						type="password"
						id="pwd"
						name="pwd"
						className="border rounded-lg py-1 px-4 shadow-sm"
					></input>
					<EyeToggle />
				</div>

				<CardFooter className="flex flex-col items-center justify-center">
					<label className="text-sm text-gray-600 ">
						Already have an account?
						<Link href="/sign-in">
							<label className="font-bold cursor-pointer"> Sign in</label>
						</Link>
					</label>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignUp;
