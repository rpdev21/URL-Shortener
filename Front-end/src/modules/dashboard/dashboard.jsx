import { Box, Button, Flex, Separator , Heading , Text } from "@radix-ui/themes"
import { useNavigate , Outlet, useLocation } from "react-router-dom";

const linkStyle = (isActive) => ({
    padding: "12px 16px",
    borderRadius: 8,
    display: "block",
    background: isActive ? "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)" : "transparent",
    color: isActive ? "#fff" : "var(--gray-12)",
    cursor: "pointer",
    fontWeight: isActive ? "bold" : "normal",
    marginBottom: "8px",
    transition: "background 0.3s, color 0.3s",
    boxShadow: isActive ? "0 2px 8px rgba(106,17,203,0.15)" : "none",
});

export const Dashboard = () =>{
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const active = pathname.includes("/dashboard/links") ? "links" : "shorten";
    return (
        <Flex direction ="column" style = {{
            minHeight: "100dvh",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
        }}>
            <Box asChild>
                <header style={{
                    padding:"20px 32px",
                    background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(106,17,203,0.10)"
                }}>
                    <Flex align="center" justify="between">
                        <Heading size="5" style={{letterSpacing: "1px"}}>
                            URL Shortener App Welcome {localStorage.email}
                        </Heading>
                        <Button
                            variant="soft"
                            style={{
                                background: "#fff",
                                color: "#2575fc",
                                fontWeight: "bold",
                                boxShadow: "0 2px 8px rgba(37,117,252,0.10)"
                            }}
                            onClick={() => {
                                localStorage.removeItem("name");
                                navigate("/login" , {replace:true});
                            }}
                            >
                                Logout
                        </Button>
                    </Flex>
                </header>
            </Box>

            <Separator size="4"/>

            <Flex style={{flex:1}}>
                <Box asChild>
                    <aside
                    style={{
                        width:"240px",
                        padding:"24px 16px",
                        borderRight: "1px solid var(--gray-5)",
                        background: "rgba(255,255,255,0.7)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                    }}
                    >
                        <Flex direction ="column" gap="2">
                            <Text size="2" color="gray" style={{marginBottom: "16px", fontWeight: "bold"}}>Menu</Text>
                            <div
                                style={linkStyle(active === "shorten")}
                                onClick={() => navigate("/dashboard/shorten")}
                                >
                                    Generate Short Url
                            </div>
                            <div
                            style={linkStyle(active === "links")}
                            onClick={() => navigate("/dashboard/links")}
                            >
                                My URLs
                            </div>
                        </Flex>
                    </aside>
                </Box>

                <Separator orientation="vertical" size="4" style={{height: "100%"}}/>

                <Box asChild>
                    <main style={{
                        flex:1,
                        padding:32,
                        background: "rgba(255,255,255,0.85)",
                        borderRadius: "16px",
                        margin: "24px",
                        boxShadow: "0 4px 24px rgba(37,117,252,0.07)"
                    }}>
                        <Outlet/>
                    </main>
                </Box>
            </Flex>
        </Flex>
    );
};
