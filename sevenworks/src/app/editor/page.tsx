"use client";

import Navbar from "./components/navbar";
import IconBar from "./components/left_iconbar";
import InputFields from "./components/input_viewer";
import RightView from "./components/right_cards";
import { useEffect, Suspense } from "react";
import { useAuth } from "../authContext";
import { useRouter } from "next/navigation";
import { FormProvider } from "./formcontext";
import { ZoomProvider } from "./zoomcontext";
import "./../globals.css";

export default function Editor() {

    const { user, loading } = useAuth();
    const router = useRouter();

    // Redirect if user isn't logged in
    useEffect(() => {
      if (!loading && !user) {
        router.push("/register/login");
      }
    }, [user, loading, router]);

    return (
      <ZoomProvider>
        <FormProvider>
          <div className="bg-[#F8F8F8] h-screen flex flex-col overflow-hidden pb-2">
          <Navbar />
          <div className="flex-1 flex pl-4 w-full gap-2 min-h-0 bg-[#F8F8F8]">
            <IconBar />
            <Suspense fallback={<div>Loading Input Fields...</div>}>
              <InputFields />
            </Suspense>
            <Suspense fallback={<div>Loading Editor...</div>}>
            </Suspense>
            <RightView />
          </div>
        </div>
        </FormProvider>
      </ZoomProvider>
    );
}