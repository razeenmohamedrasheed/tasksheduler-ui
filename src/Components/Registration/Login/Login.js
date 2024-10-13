import React, { useState } from 'react'

function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState(1);
    const [signUpForm,setSignUpForm] = useState({
        username: "",
        email: "",
        contact: "",
        password: ""

    })

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
      };
    
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm((prevForm) => ({
          ...prevForm,
          [name]: value
        }));
      };

    const registerUser= async(e)=>{
        e.preventDefault();
        let payload = {
            username: signUpForm.username,
            email: signUpForm.email,
            contact: signUpForm.contact,
            password: signUpForm.password,
            role_id: role
        }
        try {
            const response = await fetch('http://localhost:8000/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
        
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error('Error:', error);
          }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        {isLogin ? (
          // Login Form
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Login
            </button>
            <p className="text-sm text-center mt-2">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-indigo-500 hover:underline"
                onClick={toggleForm}
              >
                Register here
              </button>
            </p>
          </form>
        ) : (
          // Registration Form
          <form className="space-y-4" onSubmit={registerUser}>
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                name='username'
                value={signUpForm.username}
                onChange={handleFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name='email'
                value={signUpForm.email}
                onChange={handleFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name='password'
                value={signUpForm.password}
                onChange={handleFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Contact</label>
              <input
                type="text"
                name = 'contact'
                value={signUpForm.contact}
                onChange={handleFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <select
                value={role}
                onChange={handleRoleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Register
            </button>
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <button
                type="button"
                className="text-indigo-500 hover:underline"
                onClick={toggleForm}
              >
                Login here
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login