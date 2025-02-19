import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from  "@/app/models/user";
import connectToDatabase from "@/app/lib/mongodb";

/*
NOTE: a status of 400 means that one of the predefined errors occured.
      a status of 500 means that some other unexpected error occured (shouldn't happen)
      a status of 201 means that the sign-up was successful
      Status will be displayed in the console after every sign-up attempt
*/

export async function POST(request: Request) {
    const {email, password, confirmPassword} = await request.json();

    const isValidEmail = function(email: string){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regular Expression for email format
        return emailRegex.test(email); //Return true if email matches regex
    }

    //check if all fields are filled out
    if (!email || !password || !confirmPassword){
        return NextResponse.json({message: "All fields are required"}, {status: 400});
    }

    //check if email is valid format
    if (!isValidEmail(email)) {
        return NextResponse.json({message: "Invalid email format"}, {status: 400});
    }

    //check if confirmPassword is the same as password
    if (confirmPassword !== password){
        return NextResponse.json({message: "Passwords do not match"}, {status: 400});
    }

    //check if password is less than the required length (8)
    if (password.length < 8){
        return NextResponse.json({message: "Password must be at least 8 characters long"}, {status: 400});
    }

    try {
        await connectToDatabase(); //Connect to mongodb database

        //check if email is already in use for existing user
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return NextResponse.json({message: "email already in use"}, {status: 400});
        }

        //encrypt password and asign email/pass to new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return NextResponse.json({message: "User successfully created!"}, {status: 201});
    } catch(error) {
        return NextResponse.json({message: {error}}, {status: 500});
    }
}

