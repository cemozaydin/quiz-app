function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni=soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;      
}

Soru.prototype.cevapKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js",b:"TypeScript", c:"Npm"}, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js",b:"TypeScript", c:"Npm"}, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js",b:"TypeScript", c:"Npm"}, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js",b:"TypeScript", c:"Npm"}, "c"),
    new Soru("5-Hangisi .Net paket yönetim uygulamasıdır?", {a:"Node.js",b:"NuGet", c:"Npm"}, "b"),
    new Soru("6-Hangisi .Net paket yönetim uygulamasıdır?", {a:"Node.js",b:"NuGet", c:"Npm"}, "b")
];