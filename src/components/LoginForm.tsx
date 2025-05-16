import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="w-full max-w-md border border-dental-gold/30 rounded-lg bg-dental-dark overflow-hidden">
      <div className="p-6">
        <h2 className="text-dental-gold text-2xl mb-2">
          Welcome to Dental Quick
        </h2>
        <p className="text-gray-400 mb-6">
          Enter your credentials to access the platform
        </p>

        <Tabs defaultValue="login" className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2 bg-dental-darkGray">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-dental-dark data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-dental-dark data-[state=active]:text-white"
            >
              Register
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-200">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@example.com"
              className="bg-dental-darkGray border-dental-darkGray text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm text-gray-200">
                Password
              </label>
              <a href="#" className="text-dental-gold text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••"
              className="bg-dental-darkGray border-dental-darkGray text-white"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-dental-gold hover:bg-dental-darkGold text-dental-dark font-medium"
          >
            Sign in
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-dental-gold/50 text-dental-gold hover:bg-dental-gold/10 hover:text-white bg-dental-dark/20"
          >
            Try Demo Access
          </Button>
        </form>

        <div className="text-center text-xs text-gray-500 mt-6">
          Protected by end-to-end encryption.
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
