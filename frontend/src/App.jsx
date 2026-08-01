import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState([
    {
      name: "Project Report.pdf",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      name: "Presentation.pptx",
      type: "PPTX",
      size: "8.1 MB",
    },
    {
      name: "Project Image.png",
      type: "PNG",
      size: "1.2 MB",
    },
    {
      name: "Important Document.docx",
      type: "DOCX",
      size: "3.5 MB",
    },
  ]);

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setPage("dashboard");
  };

  // =========================
  // FILE UPLOAD
  // =========================

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length === 0) {
      return;
    }

    const newFiles = selectedFiles.map((file) => {
      const extension =
        file.name.split(".").pop()?.toUpperCase() || "FILE";

      const sizeInMB =
        file.size / (1024 * 1024);

      return {
        name: file.name,
        type: extension,
        size:
          sizeInMB < 1
            ? `${(file.size / 1024).toFixed(1)} KB`
            : `${sizeInMB.toFixed(1)} MB`,
      };
    });

    setFiles((previousFiles) => [
      ...newFiles,
      ...previousFiles,
    ]);

    alert(
      `${selectedFiles.length} file(s) added successfully!`
    );

    e.target.value = "";
  };

  // =========================
  // HOME PAGE
  // =========================

  if (page === "home") {
    return (
      <div className="app">

        <nav className="navbar">

          <div className="logo">
            SmartCloud Storage Optimizer
          </div>

          <div className="nav-links">

            <button
              onClick={() => setPage("home")}
            >
              Home
            </button>

            <button
              onClick={() => setPage("login")}
            >
              Dashboard
            </button>

            <button
              className="login-btn"
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </div>

        </nav>

        <section className="hero">

          <div className="content">

            <p className="welcome-text">
              SMART CLOUD STORAGE
            </p>

            <h1>
              Manage Your Cloud
              <span> Smarter</span>
            </h1>

            <p className="description">
              SmartCloud Storage Optimizer helps
              you manage your cloud files,
              understand your storage usage,
              and identify unnecessary files
              so you can keep your storage clean
              and organized.
            </p>

            <div className="buttons">

              <button
                className="primary"
                onClick={() => setPage("login")}
              >
                Go to Dashboard
              </button>

              <button
                className="secondary"
                onClick={() => setPage("login")}
              >
                Upload Files
              </button>

            </div>

          </div>

          <div className="cloud-card">

            <div className="cloud-icon">
              ☁️
            </div>

            <h3>
              Your Cloud Storage
            </h3>

            <p>
              Keep track of your files and
              storage usage in one simple
              dashboard.
            </p>

            <div className="stats">

              <div className="stat-item">
                <h2>10 GB</h2>
                <p>Total Storage</p>
              </div>

              <div className="stat-item">
                <h2>{files.length}</h2>
                <p>Files</p>
              </div>

              <div className="stat-item">
                <h2>42%</h2>
                <p>Used</p>
              </div>

            </div>

          </div>

        </section>

        <section className="features">

          <div className="feature-card">

            <div className="feature-icon">
              📁
            </div>

            <h3>
              File Management
            </h3>

            <p>
              Easily upload and manage all
              your cloud files from one place.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Storage Analytics
            </h3>

            <p>
              Understand your storage usage
              with clear and simple statistics.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Smart Optimization
            </h3>

            <p>
              Identify unnecessary files and
              discover opportunities to save
              storage space.
            </p>

          </div>

        </section>

      </div>
    );
  }

  // =========================
  // LOGIN PAGE
  // =========================

  if (page === "login") {
    return (
      <div className="app">

        <nav className="navbar">

          <div className="logo">
            SmartCloud Storage Optimizer
          </div>

          <div className="nav-links">

            <button
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>

          </div>

        </nav>

        <div
          style={{
            minHeight: "calc(100vh - 85px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 20px",
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              padding: "45px",
              background: "rgba(255, 255, 255, 0.12)",
              border:
                "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "25px",
              backdropFilter: "blur(15px)",
              boxShadow:
                "0 20px 50px rgba(0, 0, 0, 0.25)",
            }}
          >

            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >

              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "15px",
                }}
              >
                ☁️
              </div>

              <h1
                style={{
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Welcome Back
              </h1>

              <p
                style={{
                  color: "#dbeafe",
                  lineHeight: "1.6",
                }}
              >
                Login to manage your cloud
                storage.
              </p>

            </div>

            <form onSubmit={handleLogin}>

              <div style={{ marginBottom: "20px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#dbeafe",
                  }}
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />

              </div>

              <div style={{ marginBottom: "25px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#dbeafe",
                  }}
                >
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />

              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  borderRadius: "10px",
                  background: "white",
                  color: "#1d4ed8",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Login
              </button>

            </form>

          </div>

        </div>

      </div>
    );
  }

  // =========================
  // DASHBOARD
  // =========================

  return (
    <div className="dashboard">

      <nav className="dashboard-navbar">

        <div className="logo">
          SmartCloud Storage Optimizer
        </div>

        <div className="dashboard-nav-right">

          <button
            className="back-btn"
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>

          <div className="profile">

            <div className="profile-circle">
              {email
                ? email.charAt(0).toUpperCase()
                : "U"}
            </div>

            <span>
              {email || "User"}
            </span>

          </div>

        </div>

      </nav>

      <main className="dashboard-content">

        <div className="dashboard-header">

          <div>

            <span className="dashboard-label">
              STORAGE MANAGEMENT
            </span>

            <h1>
              My Cloud Storage
            </h1>

            <p>
              Manage your files and optimize
              your cloud storage efficiently.
            </p>

          </div>

          <label className="dashboard-upload">

            + Upload Files

            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />

          </label>

        </div>

        <section className="storage-overview">

          <div className="storage-card">

            <div className="storage-card-header">

              <div>

                <p>Total Storage</p>

                <h2>
                  10 GB
                </h2>

                <span className="card-subtitle">
                  Cloud storage capacity
                </span>

              </div>

              <div className="storage-icon">
                ☁️
              </div>

            </div>

            <div className="progress-container">

              <div className="progress-bar">

                <div className="progress-fill"></div>

              </div>

              <div className="progress-info">

                <span>
                  4.2 GB used
                </span>

                <span>
                  5.8 GB free
                </span>

              </div>

            </div>

          </div>

          <div className="storage-card">

            <div className="small-icon">
              📁
            </div>

            <p>
              Total Files
            </p>

            <h2>
              {files.length}
            </h2>

            <span className="card-subtitle">
              Files in your storage
            </span>

          </div>

          <div className="storage-card">

            <div className="small-icon">
              💾
            </div>

            <p>
              Available Space
            </p>

            <h2>
              5.8 GB
            </h2>

            <span className="card-subtitle">
              Storage remaining
            </span>

          </div>

        </section>

        <section className="dashboard-grid">

          <div className="files-section">

            <div className="section-header">

              <div>

                <h2>
                  My Files
                </h2>

                <p>
                  Manage your uploaded files
                </p>

              </div>

              <label className="view-all">

                Upload

                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />

              </label>

            </div>

            {files.length === 0 ? (

              <div
                style={{
                  textAlign: "center",
                  padding: "50px 20px",
                  color: "#64748b",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                >
                  📂
                </div>

                <h3>
                  No files uploaded yet
                </h3>

                <p>
                  Click Upload Files to add
                  your first file.
                </p>

              </div>

            ) : (

              files.map((file, index) => (

                <div
                  className="file-item"
                  key={`${file.name}-${index}`}
                >

                  <div className="file-info">

                    <div className="file-icon">
                      📄
                    </div>

                    <div>

                      <h4>
                        {file.name}
                      </h4>

                      <p>
                        {file.type} • Uploaded file
                      </p>

                    </div>

                  </div>

                  <div className="file-actions">

                    <span className="file-size">
                      {file.size}
                    </span>

                    <button className="more-btn">
                      ⋮
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          <div className="optimizer-card">

            <div className="optimizer-icon">
              ⚡
            </div>

            <h2>
              Storage Optimizer
            </h2>

            <p>
              Find duplicate, large, and
              unnecessary files to free up
              valuable cloud storage.
            </p>

            <div className="optimizer-stat">

              <span>
                Potential Savings
              </span>

              <strong>
                1.8 GB
              </strong>

            </div>

            <button
              className="optimize-btn"
              onClick={() =>
                alert(
                  "Storage optimization scan started!"
                )
              }
            >
              Optimize Storage
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;

