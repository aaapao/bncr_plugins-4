/**
 * @author heyboi
 * @name mi重播
 * @origin heyboi自用
 * @version 1.0.0
 * @rule ^重拨$
 * @admin true
 * @public false
 * @priority 99999
 * @disable false
 * 说明
 * 仅适用于小米路由器重拨
 */
//路由器管理员密码
const password = '';
//路由器地址
const router = 'http://192.168.31.1'
const axios = require('axios').default;
const crypto = require('crypto');
const { get } = require('http');
let sysDB = new BncrDB('system');
 /** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203d45e01cd4c8344ffddd8d874f1b64a318191f9514b98d644c03366d9e6625065c38f2169a4be01264cfb9d91bac08571e32f82df7cfb6ceb7a59bf0be89d97a473714b7f6d1d19a45bbdcf803621b0b030338d133e8efecfc7992e49eeb4390abb0ce96fa0bed2820988d028499554c35b4a75a3d9fd1ef637cd875e98708ba2783fb8ef9cf1af81874acec8bc7b3258e2220759297a6da0496386d4eed8fe3c35bd68598c82deac685f23c19d4213bcd91e5ff38085f25d37e29810b3f27b2c9346a9b88bd9fc618d5c324594fcdf8973ff338ce33065d29f78f6d11eeb0ac73d21d77e913d31aa4d6d72bb184afc24de6298ed26b2ca5acffab0b30d8a9ebab9c3a3be9752cad8da09c2e50f9d2dbf67167197adb34a558fe169f6c854adcb8e1de64bce7843eeb8ead5114dc76af608da83f5586c6992da1518f106de7fc0f5ca86b5b2a6ae193573a74f42acc872fffb91ecb7b031749637785a0eef2e58b48d04decd7cc09dd24c8343e8309d92975f9c21b8e23ebe386efff5fada957f82e2dea43e82e7c6ec93a6b4dbe12c977ffce2cf326e28d6303625fa3548a87b93ed07a09cb8ea781a63a09b01ae579353435fb66d15ea0389421c2c5a490f4b28345fb4dd565ebd9af36cdc1f088da0e2744e0d65d06586427cc3bf928d6e88a8ae3fd0775e0335fbf850bbd487d4c13b09b41fc2ad9aa19beabf39d4d240ceeb56d21e8ea5899ea5fee0f7a20332200d520e71d38bbed872b139067c9bb966a3a288e6477130d9883b64abe7b95b48ddea28422d03235926dc90eb86db038cf719201ef512d0b8b9cbef17a987e83ed82f89b75febc899e048a972bb2ceaeb49f2368c0289503749489a60c017221a08216f2bb34bfec31ae0482bc1edacbfe1dee11bd5b38c1e209b42f63c20bee1a149d00e184e1ded3a4595171e7385b25587c75d17a2dc8a1e6de663af4eaa1ef52d04aeb6bc4ad694ccbe6c9bbacc632ad52520866f8a255c3577b71b3a5180f0c3aaae057040b4058d2658142f224e4cee2a26b17d924d1725187aa3a1ed17cef733c7cec621004d7b55741ddb700ec90542c16fe8313752c08026e04495acae9c41f3e35c5bed2dd03021efd8c03a254415f0f982dd34503c0b2df52f79392e8e92e34e2f2d65e67a25186ce0fa2c241c4b19d751f631189a10c83b178e2b35264fb0e92c9fa92ce6b8fdb071bf8735a67e3babde68154df6e476e29d2905e362f9cdc0d779c7e9edb4e46d5ec7b5525234bba599b7026d95fce555941a317c3859f655c2016ae56ef9c044aec5a866a9eb8c9e05af09ecf6bc0e9660dce2b243452df9a88bb83d9ea9cdc8adfb7b628651e7ec45b0f27143ca04e5fa5a3fe7a8eefa1cf0113535f0767b5630f0edbcf45dd84eb9b6ef88045a02f7c7f5fdd156749d8c4adc19620fa53cc20c60fa2a1f2e676f511a69c37ab4c0b0a2250fe8986915130d383c3b1bcd1e1bfcf1f788124bc8368e368df9a31bdc16b2d8cf53cc7a61378c359579f55db9369e0b52be5c68b484cb08728539354dc355b0e1b231689593c7cb38f3eec6df20d4931dd56873de64b88e7ad4e8353eb23e22625a9597a3c80cc26c88cedddfa32e3e36bb11f6baf7702a5921bf11d523882bbb0fc97f55f473db09f063b775401c0d4081d8f52c1bbebec79f202fb2989671ff37ff90d10df238863cd6e609902605428d07d704a565fdda05b8f34d9428a48934c42f2bc6617444b3bfa5629be524cee3b15948608646fe648e452af0bb872e9391042cc591cfb00fa4b67b70678008bdcb2aa2f19953e1d1603e5d5995da4340b55cf46898e3b71737828b0124b18aa3be57e792119db6d0b62f605e23c382dcc71a03a09b4ab80d60e0bd4c01a1d297dfdfaac9981c4fc2c15d2fed4cb98360feff1033b6a33494fca81c3a44c6a0c0e655493bbe7cd5d41d163e6cf87772972403c18341626ec6f7fc1d3274ebd6f8e1c19b1ce613d039e5cba0bd0c15a4da32536d58ad2ac1483315bc2659d217fda4eac6984b4554b03b2c199dc0d6875f4d2da13d05519d14c6493f1ecb1650f62278398b3fe094656ef3d3aa51d41c48bae39b19418f8bb30b8b0693c424998d2b1a8cf2e4fca28580a1cc769547fbe84418ee85645062cf695655ee57522a8a8affce21b3366c69ffbbd1d043ac4465e7ae5b876e537c0b66f15aef23f1e032701291baf102fba10d84e087b4fc5e8a93130b7dad5cc4a5f36b560d5e9dbd084dec8d35b95af005fac525e5604ae42f165df72a192bd98623031137f0f9f433081a303726563fcae55e0b023c7a4f704eef723f557b91a658f793811624561d74f8ed430a7854a0e5984f549c253965135587cafa428e619e99ff2f2c52a02f027c7643a22cc08de18fcdcc82ade5684c951906a5c98f474e6ea4a8be3a602fb23666ea817fcb14d985a0bb2cb9cfc6e58b50715fd9b51975545c194f7dde24299789f6c410df200276cd2818ef3c213b9b20561fb60eede57ac1aec422ba0580339f9090f30a243153ef62dfe09632f6dc1b3fb14f97254e5ec887a08c183990ce5ff4458f303164f795e2489339fefa1dd8ac64950465071d1d2623c7b487e09c7927ffdb47ca446beb6eff442223726dab7d8a2f087efb462f3e2282ced34773eada78ec1caade5e93b8d8d26b8b2ca192bc33289cafe2cf55bdf39d6f5a2245aaea995cb56e7b8c7720ae7135bfd8c97c82ef5a32da03a9eb6b51a7ca6f61c7ac5606960117a1c919706b1ccc89af7833c8a4a74d050207bef1957d71810d58fa86a1ca9e586e95e6334619780139f3c2854d2a239bb0aacc0174e6122eb413d721e3702ec648e683328a0a4316212b908a5d869f627b0f59bbfc6b3d61a6a17302966de32453a9807a26f8251e25d5991474bcc4df678b8b3e724fe133194c146d01041a5a75b71bf9684737df01288c538bc53a5d7c3cea3c14aea014fc7a7113171c45771e93839246480ce267c98312d328a87b0562a4eb52b73bbd716ef6eebfbc6608ef98f0c80ebb4ba2348209fd6ab8dcba8afb408a3141bea32aa23f32b510e288ceee219637ddb75832e28cb17969f57fbd6c1e6ac0b93659fafd529b54d0ec7ad71dda73809c4a720a2b448cfa7e33daf7c38605bccee878d8767d5e67d8f93d9c13c112862457814cfb08e5a809a21631f09b28de7b392df3037cef7b819157f7b8359e70314d1826b7c00dc38d204e7d1cb2bd2238b1439aa5629f172f7c77e919174e8fb23148786ca5f708ef5b3b207a4f962a46fd0af5c45444b660852dfd4cdaa4b60c420fbc68ea65199f0026ed665b37b68a91252f422c6ddff7449db86e2f02f955a292b55448d742903a49043b21e0a053d16d67f4f733a4445ada2e61e76a6ff81a533f57dbd51dbc4bd3e1a06d276c92452a9de50fbeb843394113232a55412a45a655fdab4882cd5cf06d8c82e880ab049509a147588e149eab2df354c4adf341e250a8865f30823760f17982dcee2dbc453003c2733e856e68c6f016d7212549acdaabf0cd3a64078dd968a58388a26f919a120515b68dab82f0fd6415ee993ba8e8427027fe0478ec9f7f8a1e037d90683a0e8eeed9d36d4443c63514bed40605f088292dff9b2d6482fc98ff2eb5f24de85eae1f768d127408860b7dcc4f22d8180f99354385104cbea3aeed0543d4ec00b5befdf7f85aaca9276edb86d0183835bee43dfc865c4e2ba9b7f00aebd6b5feffe43bd5b6339d0f2b8f48b66355940a9f2565d93df27c5f4cf6628cd617dffabdacfcd66203d3f8e368eaebe099128e1bbb53f37fde11cf8f1e208c8338289402c0d5d86d5709d7b055dd56603ca18a997c9fdc7f1a9b1d29048a204074d8ad3f8152e9f5d165542899ffc958d8644355d85adb4097bb5abca7627f067f7cdd40e16fb2090d254a7a320ffdf3cd82cb369cc991403b1842db52797521f16f85690ab02b4d5cecfaa4a55580aa448145b6cea9036dee124440e245f5b13a6d2c8472093c3b1fc52867b723654c556da9ef5aebee1edf706b1a9f4f603af9b671824d72bd98292df31600295d61ac9f29d0e31a02e4287092a56cd21beb2e1b0b937ce00a3b3dd279a98e64cf2aa443d4089e0a5e1aa7dd28a22fc33280dc05130f84f71a8020294f36ad2095deffb3f7c4a15002a4daa05b6243ea3f12b0079527f6c6f54777f9b075f51d009e37e34eadaa8733a16dc9694a5151d1fae02c21f42dea3e85625c43d9d57564db5fab4ef224b035d8d6a062449e6ae1f946772b3bcd5a5395b661b0ac630079cc0e34f344774dacea851db2ac99a390a29bee9f46cd74368e7f78a3ad3d51795b86dc4ba901452d48302775b9f05e702c7e557b2b89fd77f2f01ffe65a288a7a6d251a6006ac196a889e1a9a2fe054277981d7255ec1b5bef528c8f5d7092ae7cf7a88c4c4772218cc9c16b1fe3036efe28e41493f7cd82ade4eb4883b090a5558a7a227f8948bbb126f85c20a0f54998f1e9be1d61a62438f188a922f08ccc0282a0a7d475672c31a2d00c7f53440798b4940ae6dfab8fa85510958ac30395e0cf5444353d46f5c08fc2abb597366bee2d53c5bd4cd9fabc7bb6283f8bff4def09379d330e1b1024b3bb79c176029f49e7842e800087d349e6067ad83fee32e04ff496496ddfa2038a0fd9f97bc148b7e7e247990bed6a6c46a99f8a19c47de2de26a69a076537f1df7ee2834230a65ee1280a5012e3c6a1a7078b4646590c38a07d577922aa7a45414d94dc41d8cc1fe2102f6dd608146ed389a7d73a63be6f2297c8bd1f75c09deed56da503bcaeecc695b2af84efb1fd55a6f5acce8afc3090f765fb5e1cf0ae62b386f5baea4556cf06aaa54382cbf14aa03f69064177319b575bda5d9699e4c27672187c1f89283f5e88b6dad4f592c73b91b8d3e25e0de63bf5bdaed011ec9c5402af4978b08604b2c3aa55dede42d44106b0cf3073c7ac492da4dc1d823cce5d633807423e70f14ffea188cf488638b02c6f9ef928512fd1cb80da7e149d434c26a72eec11cc391694938e4674dc71ba97d4cde5ff77511e0c7002a12585e395a1f15cafaae3d875d337d5c1b503a1c3192d777aac26005f77ecd98301f0df347c3a945bbf61da7c9058199ca2528d835f77721c99ce8f1afaae8e2d9f31909f64429dcf1da95d4ad90db8fd48e86069447e7387fd0598f655588a08911e974b04eca6a1a71f1a7c3105f3f2a86ac3206e5e8893ae63b49b781ddd82bbfb12c10d6624fae6fb527447a65d71eb17f422c26b5f4674540311eb9da45b3a6cc0fea78fbfa0c126c063f5e3898388c6294c39bb22fa963cef53d8942c2e30718deab8a7c5813ed609d870eba567ac69897d91316e6643ff49c20b34847c43e94177b23dabd6331e2cbbc5020e0a3bc6495e7ec037a358789f25f8a2833f5c60c45f3cf6d39102780ef90b6a09081e693ab2950021cebe795073d4ab4e6317574afe42ea0efd5a7452462f5b774ceeab027d87369979413ddac0f5a5dbc5476cd6f8eef78e4b0ba55524c2230418b63fedcb269ac4de4f0beb33d3220141aa5919c90fb9646f79e9efe1c94db1a426cc5d4f0d66ad4f7a15fed6a7d4dcab0410f2aa14d76cecc877531ba7b02800d96eb527f71eefa11dcf42] */
