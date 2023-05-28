import Head from 'next/head'
import Image from 'next/image'
import { Center, Box, FormControl, FormLabel, Input, Button, Link } from '@chakra-ui/react'
import { useState } from 'react'
export default function Signin() {
    const admin = {
        "admin": "/admin"
    }
    const [email, setEmail] = useState("")
    
    const onSignIn = () => {
        // if email in admin then redirect to /admin
        // else redirect to /user
        if (email in admin) {
            return () => {
                window.location.href = admin[email]
            }
        }
        else {
            return () => {
                window.location.href = "/user"
            }
        }

    }

    return (
        <Center height="100vh">
            <Box width="300px">
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter email" width="full" id="email" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter password" width="full" />
                </FormControl>
                    <Button colorScheme="teal" mt={4} width="full" onClick={onSignIn()}>
                        Sign In
                    </Button>
                <p>Haven&apos;t got account? <Link href="/auth/signup" textDecoration={"underline"} color={"blue"} >Sign Up</Link></p>
            </Box>
        </Center>
    )
}
