import Link from "next/link"
import { headers, cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default function changePassword({
    searchParams
}: {
    searchParams: { message: string }
}) {
    


    const changePassword = async (formData: FormData) => {
        "use server"
      
       const newPassword = formData.get("password") as string
       const repeatPassword = formData.get("repeatPassword") as string
       const { data, error } = await supabase.auth.updateUser({ password: newPassword })

       if (data) alert("Password updated successfully!")
       if (error) alert("There was an error updating your password.")
       
        return redirect("/")
    }
    

  


    return (
        <header className="min-h-screen flex flex-col items-center">
            <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
                <Link
                    href="/"
                    className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>{" "}
                    Back
                </Link>

                <form
                    className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
                    action={changePassword}
                >
                    <label
                        className="text-md"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="newPassword"
                        placeholder="••••••••"
                        required
                    />
                    <label
                        className="text-md"
                        htmlFor="password"
                    >
                        Confirm password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="repeatPassword"
                        placeholder="••••••••"
                        required
                    />
                    <button formAction={changePassword} className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
                        Change password
                    </button>

                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
            </div>
        </header>
    )
}
