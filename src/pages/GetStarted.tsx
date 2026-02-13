import { useState } from "react";
import Button from "../components/Button";
import { supabase } from "../supabaseClient";

export default function GetStarted() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // sign up function
  async function signUp(email: string, password: string, name: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      console.log("User signed up successfully:", data);
    }
  }

  // sign in function
  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("there was an error loggingin in: ", error);
    } else {
      console.log("Log in successful", data);
    }
  }

  // handle form submission
  const handleSubmit = () => {
    if (isSignUp) {
      signUp(email, password, name);
    } else if (!isSignUp) {
      signIn(email, password);
    }
  };
  return (
    <div className="h-screen w-screen flex max-sm:flex-col items-center justify-center">
      <div className="flex-1 h-full hidden lg:flex flex-col items-start justify-between py-12 gap-10 pl-20 signUpBg">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="#c3bef0"
            stroke="currentColor"
            stroke-width="0.3333333333333333"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-sparkles-icon lucide-sparkles"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
          <span className="text-xl tracking-widest font-light">RAZAN</span>
        </div>
        <div>
          <h2 className="text-6xl leading-snug font-[Playfair_Display] font-normal">
            Your Digital <br />
            <span className="italic">Sanctuary</span>
          </h2>
          <p className="text-xl text-white/60 tracking-wide mt-4 font-light w-1/2">
            Join a community of students who prioritize focus, clarity, and
            aesthetic flow in their daily routines.{" "}
          </p>
        </div>
        <div className="text-white/60 font-light text-xs font-[Lexend] tracking-widest">
          10K+ STUDENTS FOCUSING WITH RAZAN (Not yet but I need something here)
        </div>
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <form
          className="w-[95%] xl:w-[70%] 2xl:[50%] bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-12 border border-white/10 flex flex-col gap-8"
          action="#"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div>
            <span className="text-3xl font-light font-[Playfair_Display]">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </span>
            <p>
              {isSignUp
                ? "Enter your details to begin your journey."
                : "Sign in to continue your journey."}
            </p>
          </div>
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-sm font-[Lexend] tracking-wider font-light">
                FIRST NAME
              </label>
              <input
                type="text"
                placeholder="Denzel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/5 px-2 py-3 rounded-2xl outline-none border border-[#ffffff10] font-[Lexend] text-white/70"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label className="text-white/60 text-sm font-[Lexend] tracking-wider font-light">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/5 px-2 py-3 rounded-2xl outline-none border border-[#ffffff10] font-[Lexend] text-white/70"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/60 text-sm font-[Lexend] tracking-wider font-light">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/5 px-2 py-3 rounded-2xl outline-none border border-[#ffffff10] font-[Lexend] text-white/70"
            />
          </div>
          <Button
            text={isSignUp ? "REGISTER" : "SIGN IN"}
            textClr="text-[#1a1a2e]"
            bgClr="bg-[#c3bef0]"
          />
          <p className="text-center text-white/40 font-light leading-relaxed font-[Lexend]">
            Don't have an account yet?{" "}
            <span
              className="text-white/70 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in now" : "Sign up now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
