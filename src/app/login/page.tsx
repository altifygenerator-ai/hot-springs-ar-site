import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Admin Login | Hot Springs Arkansas",
};

export default function LoginPage() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">Admin Login</p>
          <h1>Sign in to manage events.</h1>
          <p>
            Admin access is required before reviewing, approving, or adding
            local events.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}