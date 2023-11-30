import React from 'react'
import { Button, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => {
    return (
        <Navbar color="dark" dark sticky="top">
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 20px'
                }}>
                <NavbarBrand>
                    <div>
                        abc
                    </div>
                </NavbarBrand>
                <Stack spacing={4} direction="row" align="center">
                    <Button
                        colorScheme="teal"
                        size="sm"
                    // onClick={() => handleOpenModalAuth('login')}
                    >
                        Đăng nhập
                    </Button>
                    <Button colorScheme='blue'>Button</Button>
                    <Button
                        colorScheme="teal"
                        size="sm"
                        variant="outline"
                    // onClick={() => handleOpenModalAuth('register')}
                    >
                        Đăng ký
                    </Button>
                </Stack>
            </div>
        </Navbar>
    )
}

export default Header
