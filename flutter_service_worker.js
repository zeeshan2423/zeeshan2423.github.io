'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c03e55dc91c968574349de001837037e",
".git/config": "d91c6e6a425dc15eb1afba3129322a07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6d8d6445c9eb7587e4d4dd58367b3701",
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
".git/index": "0fefb40d1ef7b13aae83be163d90aae3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1e7dbbd3ae426fce5074a212728cc34",
".git/logs/refs/heads/main": "150bba92ae4fe116a6640d88780dad29",
".git/logs/refs/remotes/origin/HEAD": "7e619dcf68bab0f8efc1deeb60d31d2c",
".git/logs/refs/remotes/origin/main": "fd6c45fcbb59a05654e73567603f0016",
".git/logs/refs/remotes/origin/master": "d03efc013ceb4f7762ccf63e1bd9126b",
".git/objects/04/8e1f36f5b96136059fcd0a8aa248231432b8ac": "bfa24a9d6e192969304326bed65fbe33",
".git/objects/05/01bed8713e0331be42e3cd9d0fc67011669e80": "b1cf2e84f46fb71366fbab9f06e2ec95",
".git/objects/05/c368499bf8ccdfcb379f2b46c6d3563954aada": "05bab3017bfaa60a227eea5d69ed9d44",
".git/objects/05/cdd332098be4e18318c4440835fe4d678a7e5e": "bf30f34d5f0895320314f0e7e980f811",
".git/objects/07/812403f8e3cd6d3e4dba9394532950ef80e05b": "480d2bd9d96193fac048bb5fbcde20ee",
".git/objects/07/c398dd7e40fcb6fef50dfbb04da2b84dd4d81d": "1e5a7bcfbae151bd8c6e5100e3bf263d",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/c8453f987c23447043deb9247e54c01a6b971e": "500f25a54363659191e8278ff9b25d0f",
".git/objects/0f/ea9fc29d305a6f8cc8a42c2c1b819b5262548b": "e60f7fd6e4c040f6155507bf835c608f",
".git/objects/15/6b82c053c550ade6cfc6c5f82a951d65e7cf83": "5f12a2e9a724f7aaea2f512ecfbb3389",
".git/objects/19/abe1c866b898a17bd77586a77d3b957edd6615": "7b984c2a00f60a94cf436985cf364c35",
".git/objects/1d/6fadb294600a70f31eab2498a6f4b633b8c2dc": "5d10defab8694513588ae8c7d0b61713",
".git/objects/1f/fb937751d2f464ec42c22d4b7efd9707e3729f": "5e3cc3db520fcacba34628e1d8ffc93d",
".git/objects/21/caeea7a9c7745252849a33df722d15de554123": "e44f13a83c934190c27c667bc767b993",
".git/objects/26/2d2499ba4aaa1f315fe18b4548854c094630ba": "aa0031853041f1bfe16ceab8674b3ba3",
".git/objects/34/69708bac3d9682a9010091c12d820950d88aed": "39f625262b0bdb853050de2746045ce2",
".git/objects/35/95c97c65a13f6e0bca52ab15328c8c105b6885": "5bc9f4a08c07617fc48098830af04daa",
".git/objects/35/c0da24d08c91a92fd5cd6220706439c8096149": "cd9ebe3dc7f4355554f6a3b7d23bca0f",
".git/objects/37/3a5a9196578b0f0b0cc19cd551ffa9125d2352": "c3baa62102dc10677724463a9d803860",
".git/objects/38/563d268d042eb4c30a0e456388d6f7a03d8560": "ab5094b4c2526a58c2db02497ffa49b4",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/eace827ea327744c12a41bb3db44db224640f1": "784b3454cb072c43d85b7537d86af72f",
".git/objects/40/f163068e24ae8563706d10efa09dd8e573c349": "0191eee4d88ba64834e815494b45d04d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f76d5296c96952b677676253e3ae31bae452d1": "2652d360874387118f57fd5d6aa813c4",
".git/objects/4b/94fe362e96b776daa6f96422e6e06a60214d68": "9cfefcbc5df07d137f76f504ace3e139",
".git/objects/4d/291cf1b24216f27e22582b10595059e0b307e7": "d1a45d189c1f1198ffdc339568520bd1",
".git/objects/4d/4a08e7decb30a8c6d9f61a6bac5804e9a37309": "8094b05c29b6f1f1bd097fca280cc872",
".git/objects/4f/e840162a3ec75d079f4ef8dac72f7325497cb9": "23f0424128a1aec40f9527efdc429698",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/8411211855267098884d463eecdca837bb9432": "368c9494a89a65772f204a0f2a62900b",
".git/objects/53/253dd241b13c2282916b3daf3a99d11e8ac1af": "0862d3305e3ee725f7c4c06f62fb0622",
".git/objects/53/892ebb718069aa767ff49b3c4298d9718a3117": "3c45d222583ee87de867e93e9f704de6",
".git/objects/55/b4ac589efe9f1a815ed46731595136cf9dc2da": "20242c02c0d25369bd006da6d2cb80a3",
".git/objects/56/0ca2883d471e08b4515f772fc86ccaba5c744b": "23a29a31da4346abc2e1b986cc99b48f",
".git/objects/57/ea24c4a9b309a6ea737111d45f5844a214d48a": "a999d6e58f9c06384e74533586ab63f3",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/ab0b0de3f3725017502c658a3108555ea07b14": "a994d131d2b316f6abbe8f4a1844a7f0",
".git/objects/5a/3e5b1fc9987d5730377aafc6eaf0de58531325": "fcdc8465ba38d1572859f56c84fad391",
".git/objects/5b/8c4e0f0f51eb6a23cbf2d9383b678a687299fa": "1d674ed000c858bcb06818205eed46ca",
".git/objects/5d/8a95e38250de02b7bccae5e55277873dc41fd1": "ff3d45c78266b99ce483877e83b75a08",
".git/objects/5f/41ad0c5fa8e0362dc3bfbaa8745dc2d852ed56": "755046c08a76692af961edfe54fba812",
".git/objects/63/200b5be5491773c1a33dc700de5d1590ad594b": "4886e997d3468b8d0e9b360319c37d0e",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/399df9286c96b4d43a527a0394f3c07e1151f0": "c48a74d42b818f5b046a0060ef3113b6",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/7b28c121f89dda73d5ebfaffe5ac7e7c043e25": "462d9c47d3f01890453f4d2d7bf06cb1",
".git/objects/71/adf5af366414ea5af97a0344dfde653fcfc9dc": "95520298b196c7ea46154f5dc9ce1272",
".git/objects/74/7139473f05ebe3ae29dbeffbb64efc4930b286": "f82a8487ba5b76d297130f623d40c8e1",
".git/objects/77/16648c6eaa0b972a73de5485ab817ba74d07eb": "d25b1a8cd1abe9734e4d99d27796bdb6",
".git/objects/77/99ca78e2c375ff9d1e64107c90d8209ae01ef6": "bc37a1de07aadbff947c850a616042db",
".git/objects/78/27c578d602b6dc9fc02e5e8e2fb1551bd4b2a2": "bffa6496477f75a4d29205585eea6016",
".git/objects/79/d49363fad04c2387a24d00991e40e433bedae9": "3583aa25b6faee613d98a5b3efc43be0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/522db404c3427403a8c205fbc35b74db2fe532": "f09192299d43dad3f0f6bef5666d9ec1",
".git/objects/7c/7565f36a1394811b77cfb30f0803f866e05a14": "7cb15c4d6cb88e661d96f12834a07b35",
".git/objects/7d/4ac966d5564226aa45cc8e8da1f407d49626a3": "e09453af6f3ce406aab31456e2eefdab",
".git/objects/7e/de4fd232029ed377bb256cb9e6b7c8b5903363": "f3196112ae7c75406fec278822c722a1",
".git/objects/80/bf6168d569fea1e65726df767f99f0eee6a815": "e4782a6ee9465b3d766b6bab63ca5eca",
".git/objects/83/e38e2abf3939a03a78807369dc079f623e2981": "88f8c4ab1078939c0d4476ba1af3df63",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8b/fda8f61b489ce1a6b42ba4f060d4da2218b152": "01da97e438cf61979bc8e3f54487bf45",
".git/objects/8d/8cb31a836a40f25f6846bdf4d094d220f30b1d": "35166e4e7a12dc38c042cc22e803ed64",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/48d758c94c7ff90f2b96cd453964241ff188a1": "a6aeb59c8fa97d8ae25c61aea544a892",
".git/objects/90/fffed74e7c6c5123ca70f3decdb05d6b842eaf": "57ae9cc4692dfc5fa6c781daa159dd56",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/09b2e614b2b722f232e00a6b30d56304ff7358": "fd0350038b4a8c5974e812f58bb92572",
".git/objects/96/d9fb92b9da16aff2eded6c8ce8f0885d5de218": "29f677aac473bdc4275d4674389df6cc",
".git/objects/97/745d335e6333fdb9d56fd41d786b6a451522e5": "d3d1f5b1b034739cf522a7a6b139ec72",
".git/objects/99/90f5202d770f10ca1705121af05ecba345979b": "ac2881385f243b0a552847903861ce27",
".git/objects/9e/32bf9c00212ab0ceb6e5c46e55fd60338fd06a": "c4b2820fa55cc8e7a0bf34ae968c718e",
".git/objects/a2/bc540e1c888b52bcb30d55fd92902d7ef1c6b5": "c38a6b1b291a4c02b4a8145c4c3c9133",
".git/objects/a6/810b3155de3a1848b5c09dfc796beef7ac3c55": "5b607d3ef7c8e81fb08ae149ff78ae5a",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/724355d3d3b782891c3aebace4ca2086fec516": "621cda01b0f4dfd8b92ff9abfe638113",
".git/objects/ab/93682c95cafd714667cee86e2a8a10b5be2de9": "6aed4a497ae3f096d1315a3ac2d28faa",
".git/objects/ab/a096aca365bc754476610c2a7fe8f9f52303d5": "af2a4cd1e2ec2d6d1ee1146da0177bfb",
".git/objects/ac/f7b9016b35224593e6b572b8be50059d39f813": "c7a8181cc91a55b546b335fe1650d6d9",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/a28fbfa7da9ea33df9002eca3bf138c1b27935": "5e7af69f12f8fe014ce53f7144e51798",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/347f85587848d87e4314dca60e53c4c7e63ad6": "c267f646c4e26c845a6c15f5eb263107",
".git/objects/be/40607ff596cab746170d04421c881de5c4d112": "b2bf8071462dcd729dd35c2f25c464c7",
".git/objects/c3/635634c610ee8dbd8d3accfcbbb4ddf1e70a24": "0e9c210aa46de150c0712dedb54ce1c5",
".git/objects/c5/97f5339d1a27f100091ea556cf190c4ac31932": "d85bcd3d3054b055f51d6de80018a282",
".git/objects/c5/9c2b1fe63de41fbfdeb78eb314436aefa1a561": "620a64be2bc45230780163f6f6506df2",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/6f35254bb47a6a89b2aaa79933a295483dc800": "f9ee83b8008b7ee9929e1ac992af3436",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cd/f16eb5a7bb3b3efa97c9811ec84ea4e5e012a3": "f7a99dc44998b8fa69ac2968dbb9f6a6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/f0b31cde972f865b3c4e3f7a5617de4de94fb7": "6b415845c1669fac8964b2a2ca3cda32",
".git/objects/dc/75e09251bd4b464bcf29aae31cf71e9606712b": "5a60f2f23367a296252898e00ed306c3",
".git/objects/dc/bc84731be6d6f2c4c88c2e18d49c5bd7326f8c": "6a3f39bdf582b1cae55c782b1fcf5a3a",
".git/objects/e1/2a532b349f8b64d05810d325d4353dba5ed867": "c585a0a3ac7b2c575baabb930743da0a",
".git/objects/e1/483b7643d80d47cb6d1f34659de29366a0d65e": "30b300829f6a10c8c0527544cae66214",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/0350b0f5c0d32b48c0a1a6355b0201c119c87c": "513ece0a85a3a20da2fbb7a6d2e61c2e",
".git/objects/ee/772b38f97b90575a212d8f2349fc17bc7de17f": "23e71d3fe2881f81d4781ba160f350b7",
".git/objects/f2/086938a806ba6abfcdfe6d0f5b7a3913668df5": "28f481be717dca0b2930bc6d5ddbfc38",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/04329f02138918a256546996a86674a65b2c38": "81c548b4e4148cf9e1cd007cb1c4b82a",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/b68692a8b80a05b65652537bf6940edc29366f": "1b4c71825e9e66cb863796cc3fbfe342",
".git/objects/fb/32b440e637993fc5e06109df08314317dbf4ae": "b8f098d0f6c5fae3bb3e0fff1658c52a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/5554e532f44cea130f1fe4b8783cc8c1eded70": "6489633b49e970e9f936ec95aed5dbe9",
".git/objects/fe/0d83d86ce797f4569645f2fbc2f0235d597d02": "a909edc9647ac265a0a267897ea70bd6",
".git/objects/pack/pack-9395b1cf243571829d2940df383edcdfdd9b356e.idx": "e07cd8bf29344911b814268e340110de",
".git/objects/pack/pack-9395b1cf243571829d2940df383edcdfdd9b356e.pack": "a0e19f089b246a39a5f4b93e5183ee65",
".git/objects/pack/pack-9395b1cf243571829d2940df383edcdfdd9b356e.rev": "360eceae567be515696f50bfbcfda36c",
".git/ORIG_HEAD": "8bb37c0e129ef5d1c2af8f6c3775ef6e",
".git/refs/heads/main": "fc38f37387c3a15cb4051ae145419bc4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fc38f37387c3a15cb4051ae145419bc4",
".git/refs/remotes/origin/master": "8bb37c0e129ef5d1c2af8f6c3775ef6e",
"assets/AssetManifest.bin": "13fcc8d35b2a813640089eaf1a410af5",
"assets/AssetManifest.bin.json": "3929ab7813ff7b79c8d2771058b5d05d",
"assets/assets/covers/camio.png": "91222c28efd70dbef2b7d4d500cccb48",
"assets/assets/covers/carbon-footprint.png": "b14f0a452dee00d9f3509b8aa714b895",
"assets/assets/covers/crisfood.png": "091cdb11a1714d0168886e5aa896b921",
"assets/assets/covers/groovi.png": "25ecd665ae2e311857d3410f27fd1a64",
"assets/assets/covers/gtmx.png": "f173871b98d6d07ce4bdd71265460dee",
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
"assets/assets/logos/avatar.png": "d807a6a4e545a3fe9f25c814ad25f40c",
"assets/assets/logos/brainium.svg": "8660c8d8bac69a040ac98dacdf12401d",
"assets/assets/logos/logo.png": "cc6e02d01752388f510a283f2d9a9c74",
"assets/assets/logos/snapwork_technologies_logo.jpg": "e1c99fc8a68d26cb19fb85fbf9e44cd7",
"assets/assets/logos/techblue.svg": "68b0a600212008ae721147bceaa4ad10",
"assets/assets/logos/uasaero_logo.jpg": "82ea7935a28d1b941750ba351875dda1",
"assets/assets/logos/zoom.svg": "2ee9c6968d63b8f703139b10c71d93ff",
"assets/assets/resume/resume.pdf": "701a2c33f78ca127d6ab308ad2bcd616",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "6881072084425848c37a63f2ac643eda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "b79cb2c5fd971208d746ebce1aed9b66",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "9cb0ccd1c1dae929f6928576a9bd58ff",
"icons/Icon-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"icons/Icon-maskable-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-maskable-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "453d67b568c6f27419ab8906b5eda765",
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
