<script>
	import { faHome, faBook, faPencilAlt, faDollar, faInfo, faBus, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons';
import Fa from 'svelte-fa'
import { faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'
let btchover
let ethhover, ltchover
</script>

<main class="font-[Rubik] bg-[#0D0D2B]">
    <!--The Header Section-->
  <header class="lg:h-screen lg:py-8 py-2 bg-[url('../assets/hero-ribbon-1.png')] bg-left">
    <nav class="flex w-10/12 mx-auto justify-between p-0">
        <div class="p-4 px-0">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="flex text-white place-items-center text-xl">
            <a href="" class="block mx-4 p-4">Products</a>
            <a href="" class="block mx-4 p-4">
                Features
            </a>
            <a href="" class="block mx-4 p-4">
                About
            </a>
            <a href="" class="block mx- p-4">
                Contact
            </a>
            <a href="" class="block mx-4 p-4">
                Login
            </a>
            <a href="" class="block ml-4 py-[14px] px-8 bg-[#3671E9] rounded-3xl">
                Register
            </a>
        </div>
    </nav>
    <section class="text-white bg-contain flex w-10/12 mx-auto py-6 lg:flex-row flex-col">
        <div class="basis-1/2 lg:py-24 py-6">
            <!---Value Proposition-->
            <div class="bg-white bg-opacity-10 py-3 pr-6 rounded-[32px] my-6 lg:mb-14 mb-3 w-fit lg:text-2xl text-[12px] text-[#b0b0b0] ">
                <span class="bg-white text-black font-bold px-6 lg:mr-4 mr-2 py-3 rounded-[32px]">75% SAVE</span> For the Black Friday Weekend
            </div>
            <p class="lg:text-[80px] text-3xl lg:font-bold">
                Fastest & Secure Platform To Invest In Crypto
            </p>
            <p class="lg:text-xl text-lg leading-relaxed lg:py-8 py-3 text-[#E0E0E0]">
                Buy and sell cryptocurrencies, trusted by 10M wallets <br class="lg:block hidden"> with over $30 billion in transactions.
            </p>
            <button class="bg-[#3671E9] lg:py-4 py-2 rounded-full font-bold lg:text-2xl flex justify-between place-items-center">
                <div class="lg:ml-6 ml-4">Try for FREE</div>
                <div class="bg-white text-[#3671E9] ml-2 lg:mr-6 mr-4 py-2 lg:px-4 px-3 rounded-full">></div>
            </button>
        </div>
        <div class="bg-[url('../assets/hero-img.png')] basis-1/2 bg-no-repeat bg-center bg-contain min-h-[300px]">
        </div>
    </section>
  </header>
<!---MOBILE DONE-->
  <!--Section 2-->
  <section class="  bg-cover bg-no-repeat lg:py-24 py-6 bg-top  bg-[url('../assets/whyCAPPRO.svg')]">
  <section class="lg:h-screen lg:w-10/12 w-full mx-auto text-white ">
    <section class="flex justify-between lg:py-18 py-6 lg:flex-row flex-col lg-w-full w-11/12 mx-auto">
        <div class="basis-4/12 lg:leading-[60px] leading-none flex place-items-center py-3">
            <div class="mr-4">
                <img src="../assets/icon bars.svg" />
            </div>
            <div>
                <h2 class="font-bold lg:text-6xl text-2xl">
                    $30B
                </h2>
                <p class="lg:text-lg">
                    Digital Currency exchanged
                </p>
            </div>
            
        </div>
        <div class="basis-4/12 flex place-items-center py-3">
            <div class="mr-4">
                <img src="../assets/icon bars.svg" />
            </div>
            <div>
                <h2 class="font-bold lg:text-6xl text-2xl">
                    10M+
                </h2>
                <p class="lg:text-lg">
                    Trusted wallets investors
                </p>
            </div>
            
        </div>
        <div class="basis-3/12 flex place-items-center py-3">
            <div class="mr-4">
                <img src="../assets/icon bars.svg" />
            </div>
            <div>
                <h2 class="font-bold lg:text-6xl text-2xl">
                    195
                </h2>
                <p class="lg:text-lg">
                    Countries supported
                </p>
            </div>
            
        </div>
    </section>
    <main class="flex justify-between lg:py-32 py-4 lg:flex-row flex-col-reverse">
        <div class="basis-[55%] bg-[url('../assets/why-img.png')] lg:bg-cover bg-contain bg-no-repeat bg-center md:min-h-[400px] min-h-[300px]">

        </div>
        <div class="basis-[40%] lg:py-36 md:py-12 py-3 px-3 lg:pb-16 pb-4 lg:text-left text-center">
            <h2 class="lg:text-5xl text-2xl font-bold lg:leading-[80px] leading-tight ">
                Why you should choose CRAPPO
            </h2>
            <p class="text-[#E0E0E0] lg:my-6 my-3 lg:text-xl text-md lg:w-3/4 w-full">
                Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
            </p>
            <button class="lg:my-6 my-3 bg-[#3671E9] py-4 px-6 rounded-full font-bold lg:text-lg text-md">
                Find Out More
            </button>
        </div>

    </main>
  </section>
  </section>
  
  <!--Check How Much-->
  <section class="lg:pt-48 pt-6 lg:pb-72 pb-52 px-2 text-white text-center">
    <h2 class="lg:text-6xl text-3xl font-bold">
        Check how much you earn
    </h2>
    <p class="lg:py-12 py-4 text-[#E0E0E0] lg:text-2xl text-lg">
        Let’s check your hash rate to see how much you will earn today, <br class="lg:block hidden">Exercitation veniam consequat sunt nostrud amet.
    </p>
  </section>

  <!--The White Part Begigns-->
  <section class="bg-[#fbfafd]">
    <div class="bg-[#FBFCFE] lg:w-8/12 w-11/12 mx-auto lg:py-16 py-8 lg:px-12 px-6 -mt-48 absolute left-1/2 transform -translate-x-1/2 rounded-2xl shadow-lg">
       <div class="flex justify-between text-black lg:text-3xl text-xl font-semibold lg:pb-12 pb-3 lg:flex-row flex-col">
        <input type="text" value="Enter your hash rate" class="lg:w-6/12 w-full text-black border-b-4 focus:outline-0 lg:m-0 my-6 bg-transparent">
        <select name="speed" id="" class="lg:w-2/12 w-full focus:outline-0 lg:mt-0 lg:my-6 my-2">
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
        </select>
       <p class="lg:py-[28px] py-4 px-8 bg-[#3671E9] rounded-[48px] text-white font-normal text-center w-fit mx-auto">
            Calculate
       </p>
       </div>

       <p class="lg:py-8 py-2 text-blue-500 md:text-xl text-lg font-bold">
        ESTIMATED 24 HOUR REVENUE:
       </p>

       <p class="text-black lg:text-[40px] font-bold">
        0.055 130 59 ETH <span class="text-blue-500">($1275)</span>
       </p>

       <p class="text-[#828282] lg:text-xl text-sm lg:py-6 py-2">
        Revenue will change based on mining difficulty and Ethereum price.
       </p>
    </div>
    <div class="lg:w-10/12 w-full mx-auto lg:pt-96 pt-56 pb-12 text-black text-center lg:text-6xl text-3xl leading-relaxed">
        <p class="py-12 lg:w-8/12 w-full mx-auto lg:px-0 px-3 font-bold">Trade securely and market the high growth cryptocurrencies.</p>
        <div class="flex justify-between lg:flex-row flex-col">
            <div class="basis-[30%] place-items-center grid lg:py-12 py-6 rounded-3xl mb-12 lg:mb-0 px-6 lg:mx-0 mx-6" class:btchover>
                <img src="../assets/bitcon.png" alt="" class="lg:mt-6 mt-2 lg:mb-12 mb-4">
                <div class="flex place-items-center lg:mb-12 mb-6">
                    <div class="lg:text-4xl text-2xl font-bold px-4">
                        Bitcoin
                    </div>
                    <div class="lg:text-2xl text-xl opacity-70">
                        BTC
                    </div>
                </div>
                <p class="lg:text-2xl text-xl text-[#828282] lg:mb-6 mb-2">
                    Digital currency in which a record of transactions is maintained.
                </p>
                <button on:click="{() => btchover = !btchover}"  class="mt-18 flex place-items-center p-4 py-4 rounded-[32px] bg-transparent h-fit leading-none" id="manner">
                    <span class="lg:text-3xl text-xl my-0 px-4 hidden ">
                        Start mining
                    </span>
                    <span class="lg:text-3xl text-xl text-[#3671E9] bg-white py-6 px-9 rounded-full border-2 border-[rgba(43, 7, 110, 0.2)]" id="arrow">
                    >
                    </span>
                </button>
            </div>
            <div class="basis-[30%] place-items-center grid lg:py-12 py-6 rounded-3xl mb-12 lg:mb-0 px-6 lg:mx-0 mx-6" class:ethhover>
                <img src="../assets/ethereum.png" alt="" class="lg:mt-6 mt-2 lg:mb-12 mb-4">
                <div class="flex place-items-center lg:mb-12 mb-6">
                    <div class="lg:text-4xl text-2xl font-bold px-4">
                        Ethereum
                    </div>
                    <div class="lg:text-2xl text-xl opacity-70">
                        ETH
                    </div>
                </div>
                <p class="lg:text-2xl text-xl text-[#828282] lg:mb-6 mb-2">
                    Blockchain technology to create and run decentralized digital applications.
                </p>
                <button on:click="{() => ethhover = !ethhover}"  class="mt-18 flex place-items-center p-4 py-4 rounded-[32px] bg-transparent h-fit leading-none" id="manner">
                    <span class="lg:text-3xl text-xl my-0 px-4 hidden ">
                        Start mining
                    </span>
                    <span class="lg:text-3xl text-xl text-[#3671E9] bg-white py-6 px-9 rounded-full border-2 border-[rgba(43, 7, 110, 0.2)]" id="arrow">
                    >
                    </span>
                </button>
            </div>
            <div class="basis-[30%] place-items-center grid lg:py-12 py-6 rounded-3xl mb-12 lg:mb-0 px-6 lg:mx-0 mx-6" class:ltchover>
                <img src="../assets/litecoin.png" alt="" class="lg:mt-6 mt-2 lg:mb-12 mb-4">
                <div class="flex place-items-center mb-12">
                    <div class="lg:text-4xl text-2xl font-bold px-4">
                        Litecoin
                    </div>
                    <div class="lg:text-2xl text-xl opacity-70">
                        LTC
                    </div>
                </div>
                <p class="lg:text-2xl text-xl text-[#828282] lg:mb-6 mb-2">
                    Cryptocurrency that enables instant payments to anyone in the world.
                </p>
                <button on:click="{() => ltchover = !ltchover}"  class="mt-18 flex place-items-center p-4 py-4 rounded-[32px] bg-transparent h-fit leading-none" id="manner">
                    <span class="lg:text-3xl text-xl my-0 px-4 hidden ">
                        Start mining
                    </span>
                    <span class="lg:text-3xl text-xl text-[#3671E9] bg-white py-6 px-9 rounded-full border-2 border-[rgba(43, 7, 110, 0.2)]" id="arrow">
                    >
                    </span>
                </button>
            </div>
        </div>
    </div>
  </section>


  <section class="bg-[#2B076E] p-0">
  <section class="w-10/12 mx-auto bg-[url('../assets/features-circle-1.png')] bg-no-repeat bg-left-top ">
    <h2 class="lg:text-6xl text-2xl font-bold leading-tight lg:py-24 py-6 text-white lg:w-9/12 w-11/12 mx-auto text-center">
        Market sentiments, portfolio, and run the infrastructure of your choice
    </h2>
    <div class="flex justify-between text-white lg:py-12 py-4 lg:flex-row flex-col">
        <div class="basis-[45%] lg:py-12 py-6">
            <h2 class="lg:text-4xl text-2xl font-bold lg:pt-6 pt-0">
                Invest Smart
            </h2>
            <p class="lg:text-xl text-lg lg:py-12 py-6 text-[#E0E0E0]">
                Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. 
            </p>
            <button class="lg:my-12 my-4 lg:mb-36 mb-12 bg-[#3671E9] py-4 px-6 rounded-full font-bold lg:text-lg">
                Learn More
            </button>
        </div>
        <div class="basis-[55%] bg-[url('../assets/feature-1-img.png')] bg-contain bg-no-repeat md:min-h-[427px] min-h-[200px] ">

        </div>
    </div>

    <div class="flex justify-between text-white lg:py-12 py-4 lg:my-24 my-0 lg:flex-row flex-col-reverse">
        <div class="basis-[62%] bg-[url('../assets/feature-2-img.png')] bg-contain bg-no-repeat lg:-ml-44 ml-0 md:min-h-[453px] min-h-[203px]">

        </div>
        <div class="basis-[45%] lg:py-8 pb-2 lg:my-32 lg:mb-32 mb-0">
            <h2 class="lg:text-4xl text-2xl font-bold">
                Detailed Statistics
            </h2>
            <p class="lg:text-xl text-lg lg:py-12 py-6 lg:w-[70%] text-[#E0E0E0]">
                View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
            </p>
            <button class="mt-4 bg-[#3671E9] py-4 px-6 lg:mb-0 mb-8  rounded-full font-bold lg:text-lg">
                Learn More
            </button>
        </div>
    </div>

    <div class="flex justify-between text-white lg:py-12 py-4 lg:mt-24 mt-0 lg:flex-row flex-col">
        <div class="basis-[40%] lg:pb-8 pb-2 my-0">
            <h2 class="lg:text-4xl text-2xl font-bold lg:w-[80%] w-full">
                Grow your profit and track your investments
            </h2>
            <p class="lg:text-xl text-lg lg:py-12 py-6 lg:w-[80%] text-[#E0E0E0]">
                Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
            </p>
            <button class="mt-4 bg-[#3671E9] py-4 px-6 lg:mb-0 mb-8 rounded-full font-bold lg:text-lg">
                Learn More
            </button>
        </div>
        <div class="basis-[60%] bg-[url('../assets/feature-3-img.png')] bg-contain bg-no-repeat md:min-h-[334px] min-h-[134px] mt-0">

        </div>
    </div>

  </section>
  </section>


  <!--Newsletter section-->
  <section class="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] lg:py-24 py-8">
    <section class="flex justify-between w-10/12 mx-auto bg-[url('../assets/newsletter-box.png')] bg-cover rounded-3xl py-10 text-white lg:flex-row flex-col">
        <div class="basis-1/3">
            <h2 class="lg:text-5xl text-2xl font-bold py-6 lg:pl-12 lg:0 lg:text-left text-center">
                Start mining now
            </h2>
            <p class="py-5 lg:pt-5 pt-0 lg:pl-12 lg:px-0 px-4 lg:text-2xl text-lg lg:text-left text-center">
                Join now with CRAPPO to get the latest news and start mining now
            </p>
        </div>
        <div class="lg:basis-2/4 basis-full flex justify-between place-items-center lg:pr-12 pr-0 lg:flex-row flex-col">
            <div class="basis-2/3">
                <input type="text" value="Enter your mail" class="bg-transparent mx-auto lg:text-2xl text-lg border-b-2 focus:outline-0 lg:mb-0 mb-4">
            </div>
            <div>
                <button class="bg-white text-[#3671E9] py-4 px-6 rounded-full font-bold lg:text-2xl">
                    Subscribe
                </button>
            </div>
            
        </div>
    </section>
  </section>
  
  <!--Four Column Section-->
  <section class="br-[#2B076E] lg:py-24 py-8 w-10/12 mx-auto flex justify-between text-white lg:flex-row flex-col  lg:text-left text-center ">
    <!--CRAPPO LOGO-->
    <div class="lg:py-0 py-6 basis-1/6 grid place-items-center">
        <img src="../assets/logo.svg" alt="" class="w-44">
    </div>
    <div class="basis-1/6"></div>
    <!--Quick Links-->
    <div class="lg:py-0 py-6  basis-1/6">
       <h2 class="text-3xl pb-2">
            Quick Links
       </h2>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Home</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Products</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">About</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Features</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Contact</a>
    </div>
    <!--Resources Column-->
    <div class="lg:py-0 py-6 basis-1/6">
        <h2 class="text-3xl pb-2">
            Resources  
       </h2>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Download Whitepapper</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Smart Token</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Blockchain Explorer</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Crypto API</a>
        <a href="" class="block text-[#F2F2F2] text-md py-1">Interest</a>
    </div>
    <!--Payment Methods-->
    <div class="lg:py-0 py-6  basis-2/6">
        <h2 class="lg:text-5xl text-3xl font-bold pb-16">
            We accept following payment methods
       </h2>
       <div class="flex justify-between">
        <div class="basis-1/4">
            <img src="../assets/visa.png" alt="">
        </div>
        <div class="basis-1/4">
            <img src="../assets/mastercard.png" alt="">
        </div>
        <div class="basis-1/4">
            <img src="../assets/bitcoin.png" alt="">
        </div>
    </div>
  </section>

  <!--Footer-->
  <footer class="flex justify-between py-4 w-10/12 mx-auto text-white lg:flex-row flex-col">
    <div class="text-center lg-text-left pb-6">
        ©2021 CRAPPO. All rights reserved
    </div>
    <div class="items-center">
        <img src="../assets/socials.png" alt="" class="mx-auto">
    </div>
  </footer>
</main>

<style lang="postcss">
    .btchover, .ethhover, .ltchover{
        background-color: #2B076E;
    }

    .btchover div, .btchover p, .ethhover div, .ethhover p, .ltchover div, .ltchover p{
        color:white;
    }

    .btchover span, .ethhover span, .ltchover span{
        display: inline;
    }

    .btchover #manner, .ethhover #manner, .ltchover #manner{
        background-color: #3671E9;
        color: #fff;
        margin-top: 16px;
        margin-bottom: 24px;
    }

    .btchover #arrow, .ethhover #arrow, .ltchover #arrow{
        font-size: medium;
        margin:0;
        padding: 0;
        padding-block: 4px;
        padding-inline: 16px;
        font-weight: bolder;
    }

    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
