export const Home = () =>{
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
        }}>
            <div style={{
                background: "rgba(255,255,255,0.85)",
                padding: "48px 64px",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
                textAlign: "center"
            }}>
                <h1 style={{
                    color: "#2575fc",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "16px"
                }}>
                    Home Page
                </h1>
                <p style={{color: "#6a11cb", fontSize: "1.1rem"}}>
                    Welcome to the URL Shortener App!
                </p>
            </div>
        </div>
    );
}