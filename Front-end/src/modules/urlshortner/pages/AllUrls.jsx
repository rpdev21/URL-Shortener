export const AllUrls = () =>{
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column"
        }}>
            <h1 style={{
                color: "#2575fc",
                fontSize: "2.5rem",
                fontWeight: "bold",
                letterSpacing: "1px",
                marginBottom: "16px"
            }}>
                All URLs
            </h1>
            <p style={{
                color: "#6a11cb",
                fontSize: "1.1rem"
            }}>
                Here you can view all your shortened URLs.
            </p>
        </div>
    );
}