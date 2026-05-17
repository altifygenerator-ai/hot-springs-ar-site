"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

type LoginStatus = "idle" | "loading" | "success" | "error";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<LoginStatus>("idle");
  const [message, setMessage] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setStatus("error");
      setMessage("Could not send login link. Check the email and try again.");
      return;
    }

    setStatus("success");
    setMessage("Check your email for the login link.");
  }

  return (
    <div className="event-form-wrap auth-form-wrap">
      <form className="event-form" onSubmit={handleLogin}>
        <div className="event-form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <button
          className="btn-primary event-form-submit"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Login Link"}
        </button>

        {message && (
          <p
            className={`form-status ${
              status === "success" ? "form-status-success" : ""
            } ${status === "error" ? "form-status-error" : ""}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}