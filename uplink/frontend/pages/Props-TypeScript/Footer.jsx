"use strict";
// Footer React Component
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
var Logo_1 = require("./Logo");
var React = require("react");
var Footer = function () { return (<react_1.Container as='footer' role='contentinfo' py={{ base: '12', md: '5' }}>
        <react_1.Stack spacing={{ base: '4', md: '5' }}>
            <react_1.Stack justify='space-between' direction='row' align='center'>
                <Logo_1.Logo />
                <react_1.ButtonGroup variant='ghost'>
                    <react_1.IconButton as='a' href='#' aria-label='LinkedIn' icon={<fa_1.FaLinkedin fontSize='1.25rem'/>}/>
                    <react_1.IconButton as='a' href='#' aria-label='GitHub' icon={<fa_1.FaGithub fontSize='1.25rem'/>}/>
                    <react_1.IconButton as='a' href='#' aria-label='Twitter' icon={<fa_1.FaTwitter fontSize='1.25rem'/>}/>
                </react_1.ButtonGroup>
            </react_1.Stack>
            <react_1.Text fontSize='sm' color='subtle'>
                &copy; {new Date().getFullYear()} Virtualica
            </react_1.Text>
        </react_1.Stack>
    </react_1.Container>); };
exports.Footer = Footer;
exports.default = exports.Footer;
