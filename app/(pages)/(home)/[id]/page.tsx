import Link from "next/link";

export default function Detail() {
  return (
    <div>
      <h1 className="text-lg text-center">Detail Page</h1>
      <div className="card" style={{ margin: "2rem auto", maxWidth: "400px" }}>
        <p className="text-center">This is the detail page.</p>
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
