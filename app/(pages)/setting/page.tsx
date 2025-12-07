import Link from "next/link";

export default function Setting() {
  return (
    <div>
      <h1 className="text-lg text-center">Setting Page</h1>
      <div className="card" style={{ margin: "2rem auto", maxWidth: "400px" }}>
        <p className="text-center">Configure your settings here.</p>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
