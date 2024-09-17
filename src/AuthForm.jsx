import React, { useState } from "react";

function AuthForm() {
    const [isLogin, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {
            alert("You have logged in successfully!");
            console.log({ email, password });
            localStorage.setItem("user", JSON.stringify({ email, password }));
        } else {
            alert("Please enter valid login credentials.");
        }
    };

    const handleSignUp = () => {
        if (email && password && confirmPassword) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                alert("You have signed up successfully! Please log in.");
                console.log({ email, password });
                localStorage.setItem("user", JSON.stringify({ email, password }));
                setLogin(true); // Switch to login after successful signup
            }
        } else {
            alert("Please fill in all the fields.");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1 className="topHeading">Zulfiqar: Registration Form</h1>
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setLogin(false)}>SignUp</button>
                </div>
                {isLogin ? (
                    <>
                        <div className="form">
                            <h2>Login Form</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <a href="#">Forgot Password</a>
                            <button onClick={handleLogin}>Login</button>
                            <p>
                                Not a Member?{" "}
                                <a href="#" onClick={() => setLogin(false)}>
                                    SignUp
                                </a>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="form">
                            <h2>SignUp Form</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button onClick={handleSignUp}>SignUp</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AuthForm;
