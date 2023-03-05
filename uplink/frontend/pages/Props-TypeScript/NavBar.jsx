"use strict";
// NavBar React Component
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
var Logo_1 = require("./Logo");
var react_router_dom_1 = require("react-router-dom");
var Links = ['Home', 'About Us', 'Team'];
var NavLink = function (_a) {
    var children = _a.children;
    return (<react_1.Link px={2} py={1} rounded={'md'} _hover={{
            textDecoration: 'none',
            bg: (0, react_1.useColorModeValue)('gray.200', 'gray.700'),
        }} href={'#'}>
        {children}
    </react_1.Link>);
};
function withAction(props) {
    var _this = this;
    var _a = (0, react_1.useDisclosure)(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var _b = (0, react_1.useColorMode)(), colorMode = _b.colorMode, toggleColorMode = _b.toggleColorMode;
    var toast = (0, react_1.useToast)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleClick = function () {
        navigate("/login");
    };
    var Toast;
    var logOut = function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/logout', {
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        method: 'POST'
                    })];
                case 1:
                    response = _a.sent();
                    toast({
                        title: 'Successfully Logged Out',
                        description: 'Have a great day',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                    handleClick();
                    return [2 /*return*/];
            }
        });
    }); };
    var menu;
    if (props.name === '' || props.name === undefined) {
        menu = (<react_1.Button type='button' onClick={handleClick} size='md' w='full' colorScheme='brand'>Login</react_1.Button>);
    }
    else {
        menu = (<react_1.Menu>
                <react_1.MenuButton as={react_1.Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <react_1.Avatar size={'sm'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}/>
                </react_1.MenuButton>
                <react_1.MenuList>
                    <react_1.MenuItem><react_1.Link href={'/profile/'}>Profile</react_1.Link></react_1.MenuItem>
                    <react_1.MenuItem><react_1.Link href={'/settings'}>Settings</react_1.Link></react_1.MenuItem>
                    <react_1.MenuDivider />
                    <react_1.MenuItem>
                        <react_1.Button colorScheme='brand' w='full' onClick={logOut}>Logout</react_1.Button>
                    </react_1.MenuItem>
                </react_1.MenuList>
            </react_1.Menu>);
    }
    return (<>
            <react_1.Box bg={(0, react_1.useColorModeValue)('gray.100', 'gray.900')} px={4}>
                <react_1.Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <react_1.IconButton size={'md'} icon={isOpen ? <icons_1.CloseIcon /> : <icons_1.HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
                    <react_1.HStack spacing={8} alignItems={'center'}>
                        <Logo_1.Logo />

                        <react_1.HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map(function (link) { return (<NavLink key={link}>{link}</NavLink>); })}
                        </react_1.HStack>
                    </react_1.HStack>
                    <react_1.Flex alignItems={'center'} gap='2'>
                        <react_1.Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <icons_1.MoonIcon /> : <icons_1.SunIcon />}
                        </react_1.Button>
                        {menu}
                    </react_1.Flex>
                </react_1.Flex>

                {isOpen ? (<react_1.Box pb={4} display={{ md: 'none' }}>
                        <react_1.Stack as={'nav'} spacing={4}>
                            {Links.map(function (link) { return (<NavLink key={link}>{link}</NavLink>); })}
                        </react_1.Stack>
                    </react_1.Box>) : null}
            </react_1.Box>
        </>);
}
exports.default = withAction;
