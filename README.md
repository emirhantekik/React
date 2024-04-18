# Hava Durumu Uygulaması

Bu React projesi, kullanıcıların belirli bir konumun hava durumunu görmesine olanak tanır.

## Başlarken

Bu talimatlar, projeyi yerel makinenizde çalıştırmak ve geliştirmek için size rehberlik edecektir. 

### Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımlara ihtiyacınız vardır:

- Node.js
- npm veya yarn

### Ortam Değişkenleri

Bu proje, dış API'lerle iletişim kurmak için çevre değişkenlerini kullanır. .env dosyasını projenin kök dizinine ekleyerek bu değişkenleri ayarlayabilirsiniz.

1. Projede bulunan `.env` dosyasını açın.
2. `.env` dısyasındaki aşağıdaki değişkenleri ayarlayın.

`REACT_APP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY`

`REACT_APP_OPENCAGE_API_KEY=YOUR_OPENCAGE_API_KEY`

3. REACT_APP_API_KEY: OpenWeatherMap API için API anahtarınızı buraya ekleyin.
REACT_APP_OPENCAGE_API_KEY: OpenCage Geocoding API için API anahtarınızı buraya ekleyin.

4. API anahtarlarınızı .env dosyasındaki ilgili değişkenlere ekledikten sonra, değişiklikleri kaydedin.

Bu işlemi tamamladıktan sonra,projeyi yeniden başlatarak çevre değişkenlerinin yüklenip yüklenmediğini kontrol edebilirsiniz.

## Kurulum
1. Depoyu klonlayın:
`git clone https://github.com/kullaniciadi/hava-durumu-uygulamasi.git`
2. Proje dizinine gidin:
`cd weather`
3. Bağımlılıkları yükleyin:
`npm install`
Uygulamayı başlatın:
`npm start`
<br/>

## Kullanım

<img width="369" alt="Ekran Resmi 2024-04-17 20 19 06" src="https://github.com/emirhantekik/React/assets/85496436/217cddf3-18ba-4757-a1d6-5295642e7198">


Ana ekran üzerinde, kullanıcının istediğiniz bir konumun hava durumunu arayabilirsiniz. Aynı zamanda arama çubuğunun altındaki güncel konumunuz butonuna tıklayarak bulunduğunuz konumun hava durumu bilgilerini arayabilirsiniz.

Arama sonuçları, konumun hava durumu bilgilerini gösterir.

## Özellikler

Güncel hava durumu bilgilerini görüntüleme.
Belirli bir konum için hava durumu arama.

## Teknolojiler

React

Redux

Axios

React Router

React Icons

React Query

Tailwind CSS
