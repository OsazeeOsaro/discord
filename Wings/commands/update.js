const _0x48f1=['roles','member','👋\x20You\x20must\x20be\x20new!','You\x20must\x20be\x20new,\x20in\x20order\x20to\x20verify\x20please\x20[Click\x20Here](https://verify.eryn.io/)\x20And\x20verify\x20your\x20roblox\x20user.\x20after\x20that\x20try\x20running\x20this\x20command\x20again.','User\x20not\x20found.','A\x20unknow\x20error\x20interfered\x20in\x20the\x20verifiecation\x20process,\x20this\x20is\x20a\x20RoVer\x20Error,\x20please\x20try\x20again\x20later.','author','first','You\x20have\x20been\x20successfully\x20verified\x20as\x20**','members','setThumbnail','status','https://verify.eryn.io/api/user/','env','setTitle','COLOR','channel','quick.db','guild','**,\x20please\x20wait\x20a\x20few\x20seconds\x20to\x20get\x20the\x20verified\x20role.','send','json','error','MessageEmbed','add','mentions','hasPermission','setColor','discord.js','robloxUsername','Checking\x20RoVer\x20Databases...','MANAGE_ROLES','edit','exports','get','setDescription','Error\x20you\x20can\x27t\x20perform\x20that\x20command','https://www.roblox.com/headshot-thumbnail/image?userId=','cache'];(function(_0x1d64e1,_0x4010c3){const _0x48f113=function(_0x1919ce){while(--_0x1919ce){_0x1d64e1['push'](_0x1d64e1['shift']());}};_0x48f113(++_0x4010c3);}(_0x48f1,0xbc));const _0x1919=function(_0x1d64e1,_0x4010c3){_0x1d64e1=_0x1d64e1-0x101;let _0x48f113=_0x48f1[_0x1d64e1];return _0x48f113;};const _0x3b4ea6=_0x1919,Discord=require(_0x3b4ea6(0x124)),fetch=require('node-fetch'),db=require(_0x3b4ea6(0x119)),COLOR=process[_0x3b4ea6(0x115)][_0x3b4ea6(0x117)];module[_0x3b4ea6(0x102)]={'name':'update','description':'verifies\x20an\x20user\x20with\x20RoVer\x20API','run':async(_0x55f9de,_0x3c08a2,_0x21dc9b)=>{const _0xe8a003=_0x3b4ea6;if(!_0x3c08a2[_0xe8a003(0x109)][_0xe8a003(0x122)](_0xe8a003(0x127)))return _0x3c08a2[_0xe8a003(0x118)][_0xe8a003(0x11c)](_0xe8a003(0x105));const _0x249b9c=_0x3c08a2[_0xe8a003(0x121)][_0xe8a003(0x111)][_0xe8a003(0x10f)]()||_0x3c08a2[_0xe8a003(0x11a)]['members'][_0xe8a003(0x107)][_0xe8a003(0x103)](_0x21dc9b[0x0]),_0x3e551d=new Discord[(_0xe8a003(0x11f))]()[_0xe8a003(0x104)](_0xe8a003(0x126))[_0xe8a003(0x123)](COLOR);let _0x49ceb9=_0x21dc9b[0x0];const _0xb355fc=await _0x3c08a2[_0xe8a003(0x118)]['send'](_0x3e551d),_0x30466f=db[_0xe8a003(0x103)]('verifiedrole_'+_0x3c08a2['guild']['id']);let _0x4fbceb=_0x3c08a2[_0xe8a003(0x121)][_0xe8a003(0x111)][_0xe8a003(0x10f)]();const _0x589626=await fetch(_0xe8a003(0x114)+_0x4fbceb['id']),_0x349ebc=await _0x589626[_0xe8a003(0x11d)]();if(_0x349ebc[_0xe8a003(0x113)]===_0xe8a003(0x11e)){if(_0x349ebc['error']===_0xe8a003(0x10c)){const _0x3d9c40=new Discord[(_0xe8a003(0x11f))]()[_0xe8a003(0x116)](_0xe8a003(0x10a))[_0xe8a003(0x123)](COLOR)[_0xe8a003(0x112)](_0x3c08a2[_0xe8a003(0x10e)]['avatarURL'])[_0xe8a003(0x104)](_0xe8a003(0x10b));return _0xb355fc[_0xe8a003(0x101)](_0x3d9c40);}else{const _0x4588fe=new Discord[(_0xe8a003(0x11f))]()['setTitle']('Something\x20Went\x20Wrong.')[_0xe8a003(0x123)](COLOR)[_0xe8a003(0x104)](_0xe8a003(0x10d));}}else{if(_0x349ebc[_0xe8a003(0x113)]==='ok'){const _0x4216fa=new Discord[(_0xe8a003(0x11f))]()[_0xe8a003(0x116)]('Welcome!')[_0xe8a003(0x123)](COLOR)[_0xe8a003(0x112)](_0xe8a003(0x106)+_0x349ebc['robloxId']+'&width=420&height=420&format=png')[_0xe8a003(0x104)](_0xe8a003(0x110)+_0x349ebc[_0xe8a003(0x125)]+_0xe8a003(0x11b));_0x30466f===null&&_0x4216fa['setDescription'](_0xe8a003(0x110)+_0x349ebc[_0xe8a003(0x125)]+'**.\x20Server\x20admins\x20hasn\x27t\x20set\x20the\x20verified\x20role,\x20so\x20we\x20can\x27t\x20give\x20you\x20any\x20role\x20at\x20this\x20moment.'),_0xb355fc[_0xe8a003(0x101)](_0x4216fa),_0x4fbceb['setNickname'](_0x349ebc[_0xe8a003(0x125)]),_0x30466f!=null&&_0x4fbceb[_0xe8a003(0x108)][_0xe8a003(0x120)](_0x30466f);}}}};