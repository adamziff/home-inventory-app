'use client'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { logout } from "@/app/(auth)/actions"

export function NavBar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto">
                <div className="mr-4 font-semibold">Home Inventory</div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <a
                        href="/dashboard"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Dashboard
                    </a>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <form action={logout}>
                        <Button
                            variant="outline"
                            size="sm"
                        >
                            Log out
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
} 