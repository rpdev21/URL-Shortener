import { Button } from '@radix-ui/themes';
import { AppRoutes } from './shared/routes/AppRoutes';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Show buttons only on home page
  const showAuthButtons = location.pathname === '/';

  const buttonStyle = {
    background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
    margin: "8px 0",
    width: "180px",
    transition: "background 0.3s, color 0.3s"
  };

  return (
    <>
      {showAuthButtons && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginTop: "32px"
        }}>
          <Button
            onClick={() => navigate('/register')}
            type="button"
            variant="classic"
            size="3"
            style={buttonStyle}
          >
            Register
          </Button>
          <Button
            onClick={() => navigate('/login')}
            type="button"
            variant="classic"
            size="3"
            style={buttonStyle}
          >
            Login
          </Button>
        </div>
      )}
      <AppRoutes />
    </>
  );
}

export default App;