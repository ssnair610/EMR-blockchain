"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var framer_motion_1 = require("framer-motion");
var SideDrawer_1 = require("../Props-TypeScript/SideDrawer");
var NavBar_1 = require("../Props-TypeScript/NavBar");
var Cookie_1 = require("../Props-TypeScript/Cookie");
var first = {
    rest: {
        rotate: "-15deg",
        scale: 1.2,
        x: "-50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "-70%",
        scale: 1.6,
        rotate: "-20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};
var second = {
    rest: {
        rotate: "15deg",
        scale: 1.2,
        x: "50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "70%",
        scale: 1.6,
        rotate: "20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};
var third = {
    rest: {
        scale: 1.2,
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        scale: 1.6,
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};
var PreviewImage = (0, react_1.forwardRef)(function (props, ref) {
    return (<react_1.Box bg="white" top="0" height="100%" width="100%" position="absolute" borderWidth="1px" borderStyle="solid" rounded="sm" borderColor="gray.400" as={framer_motion_1.motion.div} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundImage={"url(\"https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg\")"} {...props} ref={ref}/>);
});
function upLoadData() {
    var url = 'http://localhost:3000/api/user';
    var name = (0, Cookie_1.default)(url).name;
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    var controls = (0, framer_motion_1.useAnimation)();
    var startAnimation = function () { return controls.start("hover"); };
    var stopAnimation = function () { return controls.stop(); };
    return (<>
            <NavBar_1.default name={name}/>
            <SideDrawer_1.default />

            <react_1.Container maxW='container.lg' w='full' p={5} centerContent>
                <react_1.Card bg={bgColor} w='full' p={5}>

                    <react_1.Heading p={5}>Upload your Data</react_1.Heading>
                    <react_1.Divider />
                    <react_1.Container maxW='container.xl' my="7" w='full' centerContent>
                        <react_1.AspectRatio h="64" width="full" ratio={1}>
                            <react_1.Box borderColor="teal" borderStyle="dashed" borderWidth="2px" rounded="md" shadow="sm" role="group" transition="all 150ms ease-in-out" _hover={{
            shadow: "md"
        }} as={framer_motion_1.motion.div} initial="rest" animate="rest" whileHover="hover">
                                <react_1.Box position="relative" height="100%" width="100%">
                                    <react_1.Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" flexDirection="column">
                                        <react_1.Stack height="100%" width="100%" display="flex" alignItems="center" justify="center" spacing="3">
                                            <react_1.Box height="16" width="12" position="relative">
                                                <PreviewImage variants={first} backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg/1200px-Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg')"/>
                                                <PreviewImage variants={second} backgroundImage="url('https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png')"/>
                                                <PreviewImage variants={third} backgroundImage={"url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png\")"}/>
                                            </react_1.Box>
                                            <react_1.Stack p="8" textAlign="center" spacing="1" mx={7}>
                                                <react_1.Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                                    Drop your files here
                                                </react_1.Heading>
                                                <react_1.Text fontWeight="light">or click to upload</react_1.Text>
                                            </react_1.Stack>
                                        </react_1.Stack>
                                    </react_1.Box>
                                    <react_1.Input type="file" height="100%" width="100%" position="absolute" top="0" left="0" opacity="0" aria-hidden="true" 
    // accept="/*"
    onDragEnter={startAnimation} onDragLeave={stopAnimation}/>
                                </react_1.Box>
                            </react_1.Box>
                        </react_1.AspectRatio>
                    </react_1.Container>
                </react_1.Card>
            </react_1.Container>

        </>);
}
exports.default = upLoadData;
