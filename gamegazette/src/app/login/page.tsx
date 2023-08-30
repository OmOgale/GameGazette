"use client";
import * as React from "react";
import { useState } from "react";
import { useAuth } from "../../../context/authContext";

export default function Login(): JSX.Element {
  const auth = useAuth();
  return <div>Login</div>;
}
