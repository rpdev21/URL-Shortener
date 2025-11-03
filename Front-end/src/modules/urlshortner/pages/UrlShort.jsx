import { Box, Heading, Text, TextField, Button, Flex } from '@radix-ui/themes';
import { useRef, useState } from 'react';
import { apiClient } from '../../../shared/services/api-client';

export const UrlShort = () => {
    const url = useRef();
    const userEmail = localStorage.getItem("email");
    const [shortURL, setShortURL] = useState();
    const [copied, setCopied] = useState(false);

    const takeURL = async () => {
        const URL = url.current.value;
        try {
            const response = await apiClient.post('short-url', { bigUrl: URL, email: userEmail });
            if (response && response.data.shorturl) {
                setShortURL(response.data.shorturl);
                setCopied(false);
                console.log('Short URL:', response.data.shorturl);
            } else {
                console.log('Failed to shorten URL');
            }
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
        console.log("URL:", URL);
    };

    const removeShortURL = () => {
        setShortURL(undefined);
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (shortURL) {
            navigator.clipboard.writeText(shortURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    };

    const removeBigURL = () => {
        big.value='';
    }

    const blurEffectStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari compatibility
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        padding: '2rem',
    };

    return (
        <Box width="400px" mx="auto" mt="6" height="64px">
            <Heading align="center">Url Shortener</Heading>
            <Box style={blurEffectStyles}>
                <Text as="label" size="3" weight="medium">
                    Big Url
                </Text>
                <TextField.Root id="big" ref={url} type="text" placeholder="Type Url Here" />
                <Flex gap="3" mt="4">
                    <Button
                        onClick={takeURL}
                        variant="surface"
                        color="green"
                        size="3"
                        width="100%"
                    >
                        Short Url
                    </Button>
                    <Button
                        onClick={removeShortURL}
                        variant="surface"
                        size="3"
                        color="red"
                        width="100%"
                    >
                        Remove Link
                    </Button>
                    <Button
                        onClick={removeBigURL}
                        type="reset"
                        variant="surface"
                        color="yellow"
                        size="3"
                        width="100%"
                    >
                        Reset
                    </Button>
                </Flex>
                {shortURL && (
                    <Box mt="4" style={{
                        background: 'rgba(255,255,255,0.5)',
                        borderRadius: '10px',
                        padding: '1rem',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}>
                        <Text size="3" weight="medium">
                            Short URL:
                        </Text>
                        <Box mt="2" mb="2">
                            <a href={shortURL} target="_blank" rel="noopener noreferrer">{shortURL}</a>
                        </Box>
                        <Button
                            variant="soft"
                            size="2"
                            onClick={copyToClipboard}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};