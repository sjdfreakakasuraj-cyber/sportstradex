"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not authenticated and not loading, redirect to login
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkest">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Return null while redirecting
  }

  return (
    <div className="min-h-screen bg-darkest py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Welcome, {user.name}!
          </h1>
          <p className="text-white/80">
            Email: {user.email}
          </p>
          <p className="mt-3 text-xl text-white/80">
            Your personalized dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-2">My Courses</h2>
            <p className="text-white/80 mb-4">
              Access your enrolled courses and track your progress
            </p>
            <button className="bg-lighter text-darkest px-4 py-2 rounded-md hover:bg-lighter/75 transition-colors">
              View Courses
            </button>
          </div>

          <div className="bg-dark rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-2">Pocket Money</h2>
            <p className="text-white/80 mb-4">
              Track your earnings from the pocket money program
            </p>
            <button className="bg-lighter text-darkest px-4 py-2 rounded-md hover:bg-lighter/75 transition-colors">
              View Earnings
            </button>
          </div>

          <div className="bg-dark rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Program</h2>
            <p className="text-white/80 mb-4">
              Manage your affiliate links and track referrals
            </p>
            <button className="bg-lighter text-darkest px-4 py-2 rounded-md hover:bg-lighter/75 transition-colors">
              View Dashboard
            </button>
          </div>
        </div>

        <div className="mt-12 bg-dark rounded-lg p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-lighter text-darkest px-4 py-3 rounded-md hover:bg-lighter/75 transition-colors">
              Start New Course
            </button>
            <button className="bg-white/10 text-white px-4 py-3 rounded-md hover:bg-white/20 transition-colors">
              Share on Social Media
            </button>
            <button className="bg-white/10 text-white px-4 py-3 rounded-md hover:bg-white/20 transition-colors">
              Invite Friends
            </button>
            <button className="bg-white/10 text-white px-4 py-3 rounded-md hover:bg-white/20 transition-colors">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}