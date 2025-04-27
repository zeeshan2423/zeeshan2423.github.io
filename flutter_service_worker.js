'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "60df221585e9fc2c939d8baa98efb7cf",
".git/config": "02a457c2a5e1294c00caaa5e5713396a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd9947d4b20f84c9b7da88f1adaab497",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "451c1f1ada81b0062f0f332a3cb20e7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d9100f6195a813e2c71ab8a4c8a7242",
".git/logs/refs/heads/main": "31eec9f28260f1f2b6fab32ca6549817",
".git/logs/refs/heads/master": "22c47f4900646138baab508c3ec3c339",
".git/logs/refs/remotes/origin/main": "014a35c35deb4a2bbb0cc7827178c800",
".git/objects/00/102e13002122a399fa831119145fa62f97a174": "49d171d31914d4abecf46c441212f9cd",
".git/objects/02/4c1a5e686d3669b0862c532f96e7495823fda6": "b5a669d1779e1c24ab96d37995d1255f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/26494da51d0f08c6e44ca2b27484e99f3db377": "79fab5407feec6a3a5ee596b9ca598e1",
".git/objects/05/cdd332098be4e18318c4440835fe4d678a7e5e": "bf30f34d5f0895320314f0e7e980f811",
".git/objects/05/edad0294e062fd30cdd83a6dbda12dab55ed71": "f6e4e35bcb89c2f00e647b0c5234a44c",
".git/objects/07/812403f8e3cd6d3e4dba9394532950ef80e05b": "480d2bd9d96193fac048bb5fbcde20ee",
".git/objects/07/c398dd7e40fcb6fef50dfbb04da2b84dd4d81d": "1e5a7bcfbae151bd8c6e5100e3bf263d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/c8453f987c23447043deb9247e54c01a6b971e": "500f25a54363659191e8278ff9b25d0f",
".git/objects/0e/51648fb5f9077c26ec42a16c8c95a094bdc805": "ad18c2287dd7e140a2112ee04a6e3cfd",
".git/objects/0e/6b425fd131754404ae9b72d0050694f4fc96c4": "c2a85e6f1ff68bbba38e7e6177cb22f8",
".git/objects/0f/ea9fc29d305a6f8cc8a42c2c1b819b5262548b": "e60f7fd6e4c040f6155507bf835c608f",
".git/objects/12/7a674ec2168c6880fa70ea1fac0f87096a4a8e": "8cce6e1078b53526aeb0b5ce50d09499",
".git/objects/15/6b82c053c550ade6cfc6c5f82a951d65e7cf83": "5f12a2e9a724f7aaea2f512ecfbb3389",
".git/objects/15/dc649fb1e78cfc8218f3a9065bc6bddb3449fb": "323d8fccc92c8cc4bcaf28976a5ce0f4",
".git/objects/19/abe1c866b898a17bd77586a77d3b957edd6615": "7b984c2a00f60a94cf436985cf364c35",
".git/objects/19/ac19b6669752963ac439a26ecb1d61fd631846": "ea6a0397679db2839dae17489ba01c2d",
".git/objects/1d/6fadb294600a70f31eab2498a6f4b633b8c2dc": "5d10defab8694513588ae8c7d0b61713",
".git/objects/1e/a5c185fead329ca20afb7004f1bf4e652e41e1": "7a971120488085449b79810acd63391f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9f727d5e0ab4cc2d39204e81fb51664aa33a77": "37766ce94488787dc8093e9eccd306fd",
".git/objects/1f/fb937751d2f464ec42c22d4b7efd9707e3729f": "5e3cc3db520fcacba34628e1d8ffc93d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/2d2499ba4aaa1f315fe18b4548854c094630ba": "aa0031853041f1bfe16ceab8674b3ba3",
".git/objects/26/54a8c5a38d52131b797374fa61be62d45c2679": "2a47cc102b4411405d388b70edd8c5c4",
".git/objects/2e/0aa0ad77a92f794f197dbfc4c3fcabed912f25": "f694a65686d18b2548295f37940a8339",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/69708bac3d9682a9010091c12d820950d88aed": "39f625262b0bdb853050de2746045ce2",
".git/objects/35/854d37b578fdd5cf72fff8a24a1c1375b6d9df": "3e9322b5e34fc862ec15eeaa88128235",
".git/objects/35/95c97c65a13f6e0bca52ab15328c8c105b6885": "5bc9f4a08c07617fc48098830af04daa",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/3a5a9196578b0f0b0cc19cd551ffa9125d2352": "c3baa62102dc10677724463a9d803860",
".git/objects/38/563d268d042eb4c30a0e456388d6f7a03d8560": "ab5094b4c2526a58c2db02497ffa49b4",
".git/objects/38/c785afb2a968abd2c3d23a43c91196d4a178d0": "d49df8c3e71f37628549c3a2b52c74f8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/bee6f5dd13e2e4ace163fcc14e1fd856befded": "ba1073cffdda3012fa61cf8be9d767f1",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/eace827ea327744c12a41bb3db44db224640f1": "784b3454cb072c43d85b7537d86af72f",
".git/objects/40/f163068e24ae8563706d10efa09dd8e573c349": "0191eee4d88ba64834e815494b45d04d",
".git/objects/41/2d45193bcdf1f94a23e58db4de91fa70a26a90": "56a35bf11eeccdee116ffc76a5f69d9a",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/41/bcdc1599638d2a91bb0ef21690d055a2fd144d": "a8f027005895e575f090502296d51f14",
".git/objects/44/a63bcce364882cf1b83d72fcf0c93e3336cb5a": "80f8a760a839c1c95826bd574e30704b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/94fe362e96b776daa6f96422e6e06a60214d68": "9cfefcbc5df07d137f76f504ace3e139",
".git/objects/4c/7d15f7a693867c0aa66413d29e15091fedcb23": "1672ad443f29fa89c25086fc554a16ce",
".git/objects/4d/291cf1b24216f27e22582b10595059e0b307e7": "d1a45d189c1f1198ffdc339568520bd1",
".git/objects/4d/4a08e7decb30a8c6d9f61a6bac5804e9a37309": "8094b05c29b6f1f1bd097fca280cc872",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/fcdd714b974354ff1899bf8b5ddde2afeec716": "86c7c18881f864da8bea647182166a71",
".git/objects/52/cb69a25f1c770222613a757c4d7b20cebea999": "9495b3a03b7d325e561f5424f175a049",
".git/objects/53/253dd241b13c2282916b3daf3a99d11e8ac1af": "0862d3305e3ee725f7c4c06f62fb0622",
".git/objects/53/892ebb718069aa767ff49b3c4298d9718a3117": "3c45d222583ee87de867e93e9f704de6",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/55/b4ac589efe9f1a815ed46731595136cf9dc2da": "20242c02c0d25369bd006da6d2cb80a3",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/ea24c4a9b309a6ea737111d45f5844a214d48a": "a999d6e58f9c06384e74533586ab63f3",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/ab0b0de3f3725017502c658a3108555ea07b14": "a994d131d2b316f6abbe8f4a1844a7f0",
".git/objects/5a/3e5b1fc9987d5730377aafc6eaf0de58531325": "fcdc8465ba38d1572859f56c84fad391",
".git/objects/5a/9d4b2cb822ca96d8af4c408ab886940990493f": "f8eff986e93c69190cbc3632400af05c",
".git/objects/5b/8c4e0f0f51eb6a23cbf2d9383b678a687299fa": "1d674ed000c858bcb06818205eed46ca",
".git/objects/5d/8a95e38250de02b7bccae5e55277873dc41fd1": "ff3d45c78266b99ce483877e83b75a08",
".git/objects/5f/41ad0c5fa8e0362dc3bfbaa8745dc2d852ed56": "755046c08a76692af961edfe54fba812",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/200b5be5491773c1a33dc700de5d1590ad594b": "4886e997d3468b8d0e9b360319c37d0e",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/e6c3c94c2110a7e50f8031375d35e784b63759": "d8361abfecce33d6b1f85ec6495206fb",
".git/objects/67/15a1b2a1b765a01a1661830207207342026384": "37ad8b37f2774a72fef1568dad3178e5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/4f4c581777af2e0d756cdc03b6f9c73ea6a3ea": "77a342eeafc543bc0545698beea7c406",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/cb6b71499aa210481162bfca64ada1cfa0ff41": "9ec27c61ae1c7735cf4a213b1b966b36",
".git/objects/70/7b28c121f89dda73d5ebfaffe5ac7e7c043e25": "462d9c47d3f01890453f4d2d7bf06cb1",
".git/objects/71/adf5af366414ea5af97a0344dfde653fcfc9dc": "95520298b196c7ea46154f5dc9ce1272",
".git/objects/74/7139473f05ebe3ae29dbeffbb64efc4930b286": "f82a8487ba5b76d297130f623d40c8e1",
".git/objects/77/16648c6eaa0b972a73de5485ab817ba74d07eb": "d25b1a8cd1abe9734e4d99d27796bdb6",
".git/objects/77/99ca78e2c375ff9d1e64107c90d8209ae01ef6": "bc37a1de07aadbff947c850a616042db",
".git/objects/78/e8f15c64d2009348ae2d5e19f210033e62d28d": "ceaedd89c6ed00db873957a2820fbfbf",
".git/objects/79/d49363fad04c2387a24d00991e40e433bedae9": "3583aa25b6faee613d98a5b3efc43be0",
".git/objects/7c/7565f36a1394811b77cfb30f0803f866e05a14": "7cb15c4d6cb88e661d96f12834a07b35",
".git/objects/7d/4ac966d5564226aa45cc8e8da1f407d49626a3": "e09453af6f3ce406aab31456e2eefdab",
".git/objects/7e/de4fd232029ed377bb256cb9e6b7c8b5903363": "f3196112ae7c75406fec278822c722a1",
".git/objects/81/ee21abd2f3c8339e050d20a72bc407ffdad93e": "5c0c607ab59e28b37f2cff8629bd63e6",
".git/objects/83/e38e2abf3939a03a78807369dc079f623e2981": "88f8c4ab1078939c0d4476ba1af3df63",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/fda8f61b489ce1a6b42ba4f060d4da2218b152": "01da97e438cf61979bc8e3f54487bf45",
".git/objects/8d/8cb31a836a40f25f6846bdf4d094d220f30b1d": "35166e4e7a12dc38c042cc22e803ed64",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/5a5583072bf42d8e7309ae0993d6580804a5f2": "af4ca78c516f057e4e56e75ab1b9475e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/fffed74e7c6c5123ca70f3decdb05d6b842eaf": "57ae9cc4692dfc5fa6c781daa159dd56",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/7c2aba33e8ef6c9888da2d99252a3fd0a13737": "34ffaa13585d350eb4c0f3aaf894806c",
".git/objects/94/09b2e614b2b722f232e00a6b30d56304ff7358": "fd0350038b4a8c5974e812f58bb92572",
".git/objects/95/8f9467ee452391e8685d4f1f8475754fda2b33": "000a19808a0ea37be395bcb4c391a515",
".git/objects/95/dcbbb12d1b5f7cd9565d89baf828a06d94162e": "4e37e08ef743c6fb011e408d40c89544",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/643cc19eb465cc620355faa3b3f46f9ffac9cf": "33fc97735f8b380941e1ce4be1e06a5d",
".git/objects/99/90f5202d770f10ca1705121af05ecba345979b": "ac2881385f243b0a552847903861ce27",
".git/objects/9d/01255219e44e6ed065aaf1f945abf330bb17f6": "cd3725997dab8e5faf1b8841fc081c52",
".git/objects/9e/32bf9c00212ab0ceb6e5c46e55fd60338fd06a": "c4b2820fa55cc8e7a0bf34ae968c718e",
".git/objects/9f/814f212291a5eb7649127c87941f4926d4167c": "61dd584cf830aab32d4dd2aad71dfe18",
".git/objects/9f/83997c7315b25087ded6f20cbaae7a242d02cb": "a6c19200c59932a74daa16566bda9c8b",
".git/objects/a2/290de7cbd5cd21df32025d0dfbbbd22a51b700": "ad5c8d28521df4b6e603eac54460732b",
".git/objects/a2/bc540e1c888b52bcb30d55fd92902d7ef1c6b5": "c38a6b1b291a4c02b4a8145c4c3c9133",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/810b3155de3a1848b5c09dfc796beef7ac3c55": "5b607d3ef7c8e81fb08ae149ff78ae5a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/4ef137bb4cfa413f27c9b898186555b681bd47": "4d3efe97619566b471e18004a16435c0",
".git/objects/ab/93682c95cafd714667cee86e2a8a10b5be2de9": "6aed4a497ae3f096d1315a3ac2d28faa",
".git/objects/ab/a096aca365bc754476610c2a7fe8f9f52303d5": "af2a4cd1e2ec2d6d1ee1146da0177bfb",
".git/objects/ab/c7f3105748cc7dfc0b689b5056238552fb4aa1": "32b4cf73038ebe181c3c5b2fa6cea099",
".git/objects/ac/f7b9016b35224593e6b572b8be50059d39f813": "c7a8181cc91a55b546b335fe1650d6d9",
".git/objects/ad/6bf00068da72139d0b98ae338a3a814bf255a8": "f66218a048d907508633822120cc1f82",
".git/objects/ae/6aa4d10eaae7f1d7ec2921f8f9cf7361d9ff84": "dd9565bfd39bb2f40f3ad0b1a41f7383",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/8f9799ba1b94b831ce7483c12bcd07ba2718c7": "5d141b2c3a8c4b706c6d50550ee83bf0",
".git/objects/b1/a6049023335b5e9715b7f39b86f186f37d9f1e": "c8c8f5577d97824b914e6e000a1b3ed7",
".git/objects/b2/bc225fab82daa6d85a9994dfaff50bcb5f59d0": "67a941ac7076a967ba9df69f1f26ba6e",
".git/objects/b4/5bb82b751f5b2aa2ccd61b99bae55e6b5e75a1": "44b99a7830349941fba0126c65276c9a",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7288806f843dd0687860c18855af0f93d04a36": "b847fb2b3b28a5d39abf3c40745a6528",
".git/objects/ba/9fee2786bf7e69088d9e43a70886ad6dc13aeb": "6a42f71b75011ed59b6f34c9a0b0ea8c",
".git/objects/be/40607ff596cab746170d04421c881de5c4d112": "b2bf8071462dcd729dd35c2f25c464c7",
".git/objects/be/ef4cc2ca0ef8fea1a0d9db9bb38b51da5f66da": "3729ac75f43b6af4758865cdeb194461",
".git/objects/c3/635634c610ee8dbd8d3accfcbbb4ddf1e70a24": "0e9c210aa46de150c0712dedb54ce1c5",
".git/objects/c3/ed691b044b11a1c7ee16df6d584024039c8d56": "7596de85f733c6f454fc1f4b72971358",
".git/objects/c5/97f5339d1a27f100091ea556cf190c4ac31932": "d85bcd3d3054b055f51d6de80018a282",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/107f55fbb77632d1f40810cf3e5d05a481e79b": "8b7c35ecffc7edc64b7688eade8cf978",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/1f1021163f2aadddedc02f60d366fe6148ee33": "d4845ff231a4076483124162695e63f2",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/7332ce99b91e43fbd958679806b918f85b04a5": "0fbda8f2126f6b2c0bc27e10e75d7a56",
".git/objects/dc/75e09251bd4b464bcf29aae31cf71e9606712b": "5a60f2f23367a296252898e00ed306c3",
".git/objects/dc/bc84731be6d6f2c4c88c2e18d49c5bd7326f8c": "6a3f39bdf582b1cae55c782b1fcf5a3a",
".git/objects/e1/2a532b349f8b64d05810d325d4353dba5ed867": "c585a0a3ac7b2c575baabb930743da0a",
".git/objects/e1/483b7643d80d47cb6d1f34659de29366a0d65e": "30b300829f6a10c8c0527544cae66214",
".git/objects/e1/a7d5f3234b4c7a3dff94db311ded303375632d": "df1931b3404a0b1b5ab5db8150664770",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/0350b0f5c0d32b48c0a1a6355b0201c119c87c": "513ece0a85a3a20da2fbb7a6d2e61c2e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/086938a806ba6abfcdfe6d0f5b7a3913668df5": "28f481be717dca0b2930bc6d5ddbfc38",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/69ab48a766e70587c0b704839c885ae02d5816": "04bfcf580a695da50012524cf148966a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/04329f02138918a256546996a86674a65b2c38": "81c548b4e4148cf9e1cd007cb1c4b82a",
".git/objects/fb/32b440e637993fc5e06109df08314317dbf4ae": "b8f098d0f6c5fae3bb3e0fff1658c52a",
".git/objects/fb/467d94437b045222c04b7a763d7a04223e1719": "e0066fa20e0c22381abfc5bd0ebdbf19",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/44f62c40939dede0ad1ebce810b9aae923c3a8": "6c73c5fd972483f621b63dbc5afa05b7",
".git/refs/heads/main": "2ad88f531515db8338e2aa3ee62f7f50",
".git/refs/heads/master": "7b9fdafcbfe169eeecf57e287800ad95",
".git/refs/remotes/origin/main": "2ad88f531515db8338e2aa3ee62f7f50",
"assets/AssetManifest.bin": "10eb59d7596cdd5d17fb1b62d5411b97",
"assets/AssetManifest.bin.json": "edf94739685007167d60d6422a32bacc",
"assets/AssetManifest.json": "fca68a2ba31bbab970f64c4f3d7eb675",
"assets/assets/covers/camio.png": "91222c28efd70dbef2b7d4d500cccb48",
"assets/assets/covers/carbon-footprint.png": "b14f0a452dee00d9f3509b8aa714b895",
"assets/assets/covers/crisfood.png": "091cdb11a1714d0168886e5aa896b921",
"assets/assets/covers/groovi.png": "25ecd665ae2e311857d3410f27fd1a64",
"assets/assets/covers/lunches.png": "7c0c4e17dde01a93f60d382de37673d5",
"assets/assets/covers/one-piece-a-day.png": "33b847f7ddec077c33934047a6522d27",
"assets/assets/covers/prevent-suicide.png": "738d934b56c85b66ef79caa008f1c4ed",
"assets/assets/covers/rentr.png": "3123d91376a84bcb9a95b139e12f0dfb",
"assets/assets/covers/smed.png": "6c53c141822b910306841dbd418db444",
"assets/assets/covers/translangua.png": "582b043c94a180dede2d9ce415a4f258",
"assets/assets/covers/xturra-partner.png": "bac47a7161c371327ecff57b6def5bfc",
"assets/assets/covers/xturra.png": "56f6f1de54b0c26dcfcc1d74b24d0489",
"assets/assets/icons/android-studio.svg": "558e9bd2c665aea39fa44564bf6a9549",
"assets/assets/icons/apple-app-store.svg": "3bdae6a422b007be2f757c94ab9f4944",
"assets/assets/icons/bitbucket.svg": "2a7acf0f82a255e3536d8f881edfbd52",
"assets/assets/icons/confluence.svg": "54209e018abc80dd4c2ac278b6f665ee",
"assets/assets/icons/css.svg": "5f427a1d45181e64d3cbdffc6c4f860a",
"assets/assets/icons/dart.svg": "ba73012769b89296ec3034a082725d28",
"assets/assets/icons/docker.svg": "e14f56274870fca519ba960799a86f3c",
"assets/assets/icons/download.svg": "7ef11cde8d5c9d444f52898e83eec877",
"assets/assets/icons/express.svg": "cd477f28ad033b1439f75c921e6db303",
"assets/assets/icons/fastlane.svg": "3150d3359ebd32123d8f57f8368ffeea",
"assets/assets/icons/figma.svg": "9cc4e20e3a0d95b01f4f5370a633da46",
"assets/assets/icons/firebase.svg": "4ce0e63ac2c127a2c7ee797cdeb6a531",
"assets/assets/icons/flutter.svg": "7eb717347452639a6e6a1d91b1cf0a75",
"assets/assets/icons/git.svg": "fa64ffb6e4394dde387b608fbc241a28",
"assets/assets/icons/github.svg": "56986311c424351a0710dd21cd753db7",
"assets/assets/icons/gitlab.svg": "5923c5a9393500d44289b5041db6c0cd",
"assets/assets/icons/html.svg": "3386e20a4738648b627de6f520029cfa",
"assets/assets/icons/javascript.svg": "a01bfa4f34dd6102a8a57b3e1c16a69f",
"assets/assets/icons/jenkins.svg": "b32d11fa0fe632521e8b3e68322291db",
"assets/assets/icons/jira.svg": "53999d79becb97ce0baec610571a490d",
"assets/assets/icons/kotlin.svg": "82abc9a4f498558194166816c5e99f6c",
"assets/assets/icons/kubernetes.svg": "308f37bdcd36a1863a89c15f601ef403",
"assets/assets/icons/linkedin.svg": "62b5ff70fbf68b5392f822bccc71b616",
"assets/assets/icons/mongo-db.svg": "3c4ffcbcc8af43b17d3ac513a1aa0679",
"assets/assets/icons/mysql.svg": "479558683db1b2b1f0412800c093f747",
"assets/assets/icons/nextjs.svg": "7cfd7d6ccc5948e2793d3be2ce117523",
"assets/assets/icons/node.svg": "5572edf4959a4a9ad810bdd5c3341fd1",
"assets/assets/icons/playstore.svg": "bb2cca6641204566fbebeeef91611481",
"assets/assets/icons/postman.svg": "091ec4b272513de23bb878abb2eb1ee2",
"assets/assets/icons/react.svg": "680237b11b246e43a10f53770a6678d6",
"assets/assets/icons/supabase.svg": "5b8a2b3a7ef7ec24352414a9eb3f73d6",
"assets/assets/icons/tailwind.svg": "2ad98b725d589fbdf2ef81a0511a4be6",
"assets/assets/icons/typescript.svg": "592043280fe4eb45f61d1102064bdb30",
"assets/assets/icons/visual-studio-code.svg": "577b64cd99fad3e4fd45132442120e21",
"assets/assets/icons/whatsapp.svg": "32be358bc5cee58650a696d1dc6fe9ed",
"assets/assets/illustrations/boy.svg": "6352bbd6c7783e09eff2e130ce7687af",
"assets/assets/logos/brainium.svg": "8660c8d8bac69a040ac98dacdf12401d",
"assets/assets/logos/logo.png": "cc6e02d01752388f510a283f2d9a9c74",
"assets/assets/logos/techblue.svg": "68b0a600212008ae721147bceaa4ad10",
"assets/assets/logos/zoom.svg": "2ee9c6968d63b8f703139b10c71d93ff",
"assets/assets/resume/resume.pdf": "701a2c33f78ca127d6ab308ad2bcd616",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "06a463bd4e69b589b8cb6e3ba756ebf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "b79cb2c5fd971208d746ebce1aed9b66",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7fccedc6785bca8bdda13d6955954c0f",
"icons/Icon-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"icons/Icon-maskable-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-maskable-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "3f6ff1802f285d3e1d8079ac3e5a4dae",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
