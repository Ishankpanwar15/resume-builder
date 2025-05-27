// Inside signup/page.tsx
import { supabase } from "../../../lib/supabaseClient"
import { useState } from "react"

const handleSignup = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) {
    console.error("Signup error:", error.message)
  }
}
