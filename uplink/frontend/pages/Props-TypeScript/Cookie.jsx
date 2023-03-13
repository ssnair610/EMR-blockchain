"use strict";
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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@chakra-ui/react");
var Cookie = function (url) {
    var navigate = (0, react_router_dom_1.useNavigate)(), toast = (0, react_2.useToast)(), _a = (0, react_1.useState)(""), name = _a[0], getName = _a[1], _b = (0, react_1.useState)(''), email = _b[0], getEmail = _b[1], _c = (0, react_1.useState)(''), address = _c[0], getAddress = _c[1], _d = (0, react_1.useState)(''), phoneNumber = _d[0], getPhoneNumber = _d[1], _e = (0, react_1.useState)(''), doctorsName = _e[0], getDoctorsName = _e[1], _f = (0, react_1.useState)(''), medication = _f[0], getMedication = _f[1], _g = (0, react_1.useState)(''), ailments = _g[0], getAilments = _g[1], _h = (0, react_1.useState)(''), patientStatus = _h[0], getPatientStatus = _h[1], _j = (0, react_1.useState)(""), gender = _j[0], getGender = _j[1], _k = (0, react_1.useState)(""), age = _k[0], getAge = _k[1];
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        content = _a.sent();
                        getName(content.Name);
                        getEmail(content.Email);
                        getPhoneNumber(content.PhoneNumber);
                        getDoctorsName(content.DoctorsName);
                        getAddress(content.Address);
                        getMedication(content.Medication);
                        getAilments(content.Ailments);
                        getPatientStatus(content.PatientStatus);
                        getGender(content.Gender);
                        getAge(content.Age);
                        if (content.ID === undefined) {
                            toast({
                                title: 'Not authorized',
                                description: 'You must be logged in',
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                            });
                            navigate("/login");
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return {
        name: name,
        email: email,
        address: address,
        phoneNumber: phoneNumber,
        doctorsName: doctorsName,
        medication: medication,
        ailments: ailments,
        patientStatus: patientStatus,
        gender: gender,
        age: age,
    };
};
exports.default = Cookie;
