"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 text-subtle hover:text-ink"
      >
        <IoIosArrowBack className="text-[36px]" />
      </button>

      <div className="card w-full max-w-2xl p-8">
        <h1 className="text-3xl font-extrabold font-display text-ink mb-4">Privacy Policy</h1>
        <p className="text-subtle mb-4">
          At SevenWorks, we take your privacy seriously.
        </p>
        <p className="text-subtle mb-4">
          We collect and store your email, display name, and optionally, profile preferences.
          This data is only used to personalize your experience and is never sold or shared
          with third parties.
        </p>
        <p className="text-subtle mb-4">
          All data is secured via Firebase Authentication. You can request account deletion at
          any time.
        </p>
        <p className="text-subtle">
          Questions? Contact{" "}
          <a href="mailto:support@sevenworks.com" className="text-sky-600 underline">
            support@sevenworks.com
          </a>.
        </p>
      </div>
    </div>
  );
}

  