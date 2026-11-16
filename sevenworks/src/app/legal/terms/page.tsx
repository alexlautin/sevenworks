"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function TermsOfService() {
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
        <h1 className="text-2xl font-semibold tracking-tight text-ink mb-4">Terms of Service</h1>
        <p className="text-subtle mb-4">
          Welcome to SevenWorks. By using our app, you agree to the following terms.
        </p>
        <ul className="list-disc list-inside text-subtle mb-4 space-y-2">
          <li>You must be at least 13 years old to use SevenWorks.</li>
          <li>You are responsible for your account and activity.</li>
          <li>You agree not to misuse or abuse the services provided.</li>
          <li>We may suspend accounts for behavior that violates these terms.</li>
        </ul>
        <p className="text-subtle">
          For any questions or concerns, please contact{" "}
          <a href="mailto:support@sevenworks.com" className="text-sky-600 underline">
            support@sevenworks.com
          </a>.
        </p>
      </div>
    </div>
  );
}
  