import { useLogin } from '../hooks/login-hook.js';
import {Box , Heading , Text , TextField , Button , Flex} from '@radix-ui/themes';

export const Login = () => {
    const {doSubmit , register , handleSubmit , errors} = useLogin();
    const blurEffectStyles = {
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(37,117,252,0.10)',
        borderRadius: '15px',
        padding: '2rem'
    };
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
        }}>
            <Box width="400px" mx="auto">
                <Heading align="center" style={{
                    color: "#010711ff",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    fontSize: "30px"
                }}>Login Page</Heading>
                <Box style={blurEffectStyles}>
                    <form onSubmit={handleSubmit(doSubmit)}>
                        <Box mb="3">
                            <Text as="label" size="3" weight="medium" style={{color: "#2575fc"}}>
                                Email
                            </Text>
                            <TextField.Root {...register('email')} type="email" placeholder="Enter your email" />
                            {errors.email && <Text color='red'>{errors.email.message}</Text>}
                        </Box>

                        <Box mb="3">
                            <Text as="label" size="3" weight="medium" style={{color: "#2575fc"}}>
                                Password
                            </Text>
                            <TextField.Root {...register('password')} type="password" placeholder="Enter your password" />
                            {errors.password && <Text color='red'>{errors.password.message}</Text>}
                        </Box>

                        <Flex gap="3" mt="4">
                            <Button type="submit" variant="primary" size="3" width="100%" style={{
                                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                                color: "#fff",
                                fontWeight: "bold"
                            }}>Login</Button>
                            <Button type="reset" variant="secondary" size="3" width="100%" style={{
                                background: "#fff",
                                color: "#2575fc",
                                fontWeight: "bold"
                            }}>Reset</Button>
                        </Flex>
                    </form>
                </Box>
            </Box>
        </div>
    );
};
export default Login;