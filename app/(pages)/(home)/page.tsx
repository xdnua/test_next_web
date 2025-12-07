import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg text-center">Home Page</h1>
      <div className="card" style={{ margin: "2rem auto", maxWidth: "400px" }}>
        <p className="text-center">Welcome to the home page.</p>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/detail">
            <button className="btn btn-primary">Go to Detail</button>
          </Link>
          <Link href="/setting">
            <button className="btn btn-secondary">Go to Setting</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
