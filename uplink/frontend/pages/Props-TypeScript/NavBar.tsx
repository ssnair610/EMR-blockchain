// NavBar React Component

import * as React from 'react';
import {ReactNode} from 'react';
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Logo} from "./Logo";
import {useNavigate} from "react-router-dom";


const NavLink = ({children}: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);


export default function withAction(props: { name: string, mode: string }) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const toast = useToast()
    const navigate = useNavigate();

    let navMenuLinks;
    if (props.mode === 'doc') {
        navMenuLinks = (<>
            <Link href={'/docProfile/'} style={{textDecoration: 'none'}}><MenuItem>Profile</MenuItem></Link>
            <Link href={'/docSettings'} style={{textDecoration: 'none'}}><MenuItem>Settings</MenuItem></Link></>)
    } else if (props.mode === 'patient') {
        navMenuLinks = (<>
            <Link href={'/profile/'} style={{textDecoration: 'none'}}><MenuItem>Profile</MenuItem></Link>
            <Link href={'/settings'} style={{textDecoration: 'none'}}><MenuItem>Settings</MenuItem></Link>
        </>)
    }

    const handleClick = () => {
        navigate("/login");
    }

    const logOut = async () => {
        const response = await fetch('http://localhost:3000/api/logout', {

            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });

        toast({
            title: 'Successfully Logged Out',
            description: 'Have a great day',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })

        handleClick();

    }

    let menu;
    if (props.name === '' || props.name === undefined) {
        menu = (
            <Button type='button' onClick={handleClick} size='md' w='full'
                    colorScheme='brand'>Login</Button>
        )
    } else {
        menu = (
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                </MenuButton>
                <MenuList>
                    {navMenuLinks}
                    <MenuDivider/>
                    <MenuItem>
                        <Button colorScheme='brand' w='full' onClick={logOut}>Logout</Button>
                    </MenuItem>
                </MenuList>
            </Menu>

        )
    }


    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Logo/>

                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            <Link style={{textDecoration: 'none'}} href='/'>Home</Link>
                            <Link style={{textDecoration: 'none'}} href='/AboutUs'>About Us</Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} gap='2'>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                        </Button>
                        {menu}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            <Link style={{textDecoration: 'none'}} href='/'>Home</Link>
                            <Link style={{textDecoration: 'none'}} href='/AboutUs'>About Us</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

