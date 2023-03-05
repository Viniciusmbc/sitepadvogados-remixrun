// Components
import CardsHome from "../components/Cards/CardsHome";
import CardsPrice from "../components/Cards/CardsPrice";
import CardsStep from "../components/Cards/CardsStep";

// Content
import {
  priceBasic,
  priceComplete,
  pricePremium,
} from "../components/content/prices";

// Remix Components
import { Link } from "@remix-run/react";

// Images
import socialmediaimg from "../../public/whatsimagem2.png";
import securityWebImage from "../../public/websecurity-ai.jpg";
import whatsappIcon from "../../public/whatsapp.jpg";
import formImg from "../../public/formImg.jpg";
import manutencaoImagem from "../../public/manutencaoSite.png";
import personalizado from "../../public/personalizadoWeb.png";
import redacaoImagem from "../../public/redacaoImagemicone.png";
import seoImagem from "../../public/seoImagem.png";
import imagemPrincipal from "../../public/sitePrincipal.png";
import relogioImagem from "../../public/siterapidoImage.png";
import whatsappImagem from "../../public/whatsappImagemAuto.png";
import backgroundImageHome from "../../public/background-image-home.png";
import semicirculo2 from "../../public/meia-lua-home.png";

export default function Home() {
  return (
    <main>
      <section className="  flex   justify-center items-center h-[85vh] relative ">
        <img
          src={backgroundImageHome}
          alt="imagem de background"
          width={812}
          height={903}
          className=" absolute left-2/4 hidden md:block md:max-w-[512px] -z-40"
        />
        <div className=" top-[15%]  absolute z-40 inset-y-0 md:left-28 ">
          <h1 className=" text-quaternary font-bold  flex flex-col text-3xl text-center md:text-left  md:text-7xl">
            Nós colocamos seus <br></br>
            <span className=" text-secondary">
              Serviços de Advocacia <br></br>
            </span>
            na Web!
          </h1>
          <h2 className=" my-8 text-xl  text-primary max-w-[438px] text-center">
            Ter um site que atraia e converta clientes é essencial para
            construir uma carreira sólida na advocacia.{" "}
            <i>De advogado para advogado.</i>
          </h2>

          <Link
            to={"/"}
            className="block mt-9 mx-auto text-xl w-56  p-4  bg-secondary rounded-full text-white text-center hover:bg-quaternary hover:text-secondary md:w-80"
          >
            Contate-nos
          </Link>
        </div>

        <img
          src={imagemPrincipal}
          className=" md:max-w-[524px] md:max-h-[524px] absolute inset-y-0 right-0 top-[20%] "
          width={524}
          height={524}
          alt="imagem principal"
        />
        <img
          src={semicirculo2}
          alt="um semi circulo"
          width="316"
          height="241"
          className=" absolute left-64 top-[93%] -z-30 hidden md:block"
        />
      </section>

      <div>
        <section className="flex mx-auto flex-col justify-center items-center pt-24 w-full max-w-[100vw]">
          <h2 className="  mb-24 text-center text-2xl  md:mb-32 md:text-5xl">
            Por que nos <b className=" text-tercery">escolher</b> para criar seu
            site?
          </h2>
          <ul className="grid md:grid-cols-3  gap-8 ">
            <li>
              <CardsHome
                src={personalizado}
                titulo={"Site personalizado."}
                texto={
                  "Nossa equipe de web designers criará um site totalmente exclusivo para você se diferenciar na internet!"
                }
                alt={"Imagem referente a serviço especializado"}
              />
            </li>
            <li>
              <CardsHome
                src={relogioImagem}
                titulo={"Websites rápidos!"}
                texto={
                  "Seu site irá carregar com velocidade independente da conexão."
                }
                alt={"Imagem referente a websites com velocidade"}
              />
            </li>
            <li>
              <CardsHome
                src={redacaoImagem}
                titulo={"Criação de conteúdo textual!"}
                texto={
                  "Nossos redatores possuem a experiência e o conhecimento necessário para redigir textos de fácil entendimento para o público."
                }
                alt={
                  "Imagem referente ao plano com criação de conteúdo textual incluso"
                }
              />
            </li>
            <li>
              <CardsHome
                src={whatsappImagem}
                titulo={"Automatização de WhatsApp"}
                texto={
                  "Oferecemos automatização do WhatsApp para você responder seus clientes com agilidade, 24 horas por dia!"
                }
                alt={"Imagem referente ao plano com automatização do WhatsApp"}
              />
            </li>
            <li>
              <CardsHome
                src={seoImagem}
                titulo={"Otimização para SEO!"}
                texto={
                  "Mostre autoridade nos assuntos abordados e atraia clientes a partir de pesquisas nos principais motores de busca.!"
                }
                alt={"Imagem referente ao SEO"}
              />
            </li>
            <li>
              <CardsHome
                src={manutencaoImagem}
                titulo={"Manutenção sem preço fixo!"}
                texto={
                  "Cobramos pela manutenção de seu websites apenas quando você realmente precisar."
                }
                alt={"Imagem referente a manutenção do website"}
              />
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section>
          <h3 className="text-2xl md:text-5xl text-center pt-10 text-secondary my-20 md:my-32 ">
            Todos nossos sites incluem:
          </h3>
          <ul className=" flex flex-wrap justify-around items-center">
            <li className=" mb-24 w-full max-w-[300px] md:mb-0">
              <img
                src={socialmediaimg}
                alt="socialmedia"
                width="300"
                height="200"
                className=" max-h-[200px]"
              />
              <strong className="text-center block text-lg mt-4">
                Link para as Redes Sociais
              </strong>
            </li>
            <hr className="hidden w-1 h-48 mx-auto my-4 bg-quaternary border-0 rounded md:my-10 md:block "></hr>

            <li className="w-full max-w-[300px] mb-24 md:mb-0">
              <img src={whatsappIcon} alt="whatsapp" width="300" height="300" />
              <strong className="text-center block text-lg mt-4">
                {" "}
                Botão para comunicação direta com o WhatsApp.
              </strong>
            </li>
            <hr className="hidden w-1 h-48 mx-auto my-4 bg-quaternary border-0 rounded md:my-10 md:block "></hr>
            <li className=" w-full max-w-[300px] mb-24  md:mb-0">
              <img
                src={formImg}
                alt="formImg"
                width="300"
                height="300"
                className="max-w-[300px]"
              />
              <strong className="text-center text-lg block mt-4">
                {" "}
                Formulário de Contato
              </strong>
            </li>
            <hr className="hidden w-1 h-48 mx-auto my-4 bg-quaternary border-0 rounded md:my-10 md:block "></hr>
            <li className=" w-full max-w-[300px] mb-24  md:mb-0">
              <img
                src={securityWebImage}
                alt="securityWebImage"
                width="300"
                height="300"
                className="max-w-[300px]"
              />
              <strong className="text-center block text-lg mt-4">
                {" "}
                Segurança: certificado SSL gratuito.
              </strong>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section className=" flex flex-col justify-center ">
          <em className="text-2xl md:text-5xl text-center text-secondary my-10 md:my-32 ">
            Passo a Passo para criarmos o WebSite{" "}
            <span className=" underline">certo</span> para você:
          </em>

          <CardsStep
            step1="Passo 1:"
            text1={`Você nos envia os textos, imagens, fotos, sites modelo... \n
                   Quanto mais detalhes você nos fornecer, melhor!`}
            step2={"Passo 2:"}
            text2={"Enviamos um layout personalizado do site para você!"}
            step3={" Passo 3: "}
            text3={
              "Assim que aprovado o layout, começamos a desenvolver seu site!"
            }
            step4={"Site Concluído"}
            text4={" Seu site estará na internet!"}
          />
        </section>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
              Preços
            </h2>
            <p className="mb-5 font-light text-black sm:text-xl">
              Nós temos o plano certo para seus objetivos!
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {priceBasic.map(
              ({ title, description, price, payInParts, options }, index) => (
                <CardsPrice
                  key={index}
                  title={title}
                  description={description}
                  payInParts={payInParts}
                  price={price}
                  options={options}
                />
              )
            )}
            {priceComplete.map(
              ({ title, description, price, payInParts, options }, index) => (
                <CardsPrice
                  key={index}
                  title={title}
                  description={description}
                  payInParts={payInParts}
                  price={price}
                  options={options}
                />
              )
            )}
            {pricePremium.map(
              ({ title, description, price, payInParts, options }, index) => (
                <CardsPrice
                  key={index}
                  title={title}
                  description={description}
                  payInParts={payInParts}
                  price={price}
                  options={options}
                />
              )
            )}
          </div>
        </div>
        <h3 className=" text-4xl text-secondary text-center">
          Quer postagem <i className=" text-quaternary">mensais</i> no Blog{" "}
          <br className="md:hidden"></br> do seu site? <br></br>
          Entre em contato conosco!
        </h3>
      </section>
      <div className=" background-linear-before-footer pb-32">
        {" "}
        <section className=" pt-24 md:pt-32">
          <strong className=" w-full flex text-5xl text-center text-secondary my-20 md:my-32">
            Perguntas Frequentes
          </strong>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold ">
              Por qual motivo devo criar um ter um site para oferecer meus
              serviços como advogado?
            </summary>
            Um site pode ser uma ótima maneira de promover os serviços de um
            advogado e aumentar a visibilidade de sua empresa. Também pode ser
            uma ferramenta útil para construir credibilidade e confiança com
            clientes em potencial. Além disso, um site pode fornecer informações
            valiosas sobre os serviços oferecidos pelo advogado, bem como sua
            experiência e qualificações. Isso pode ajudar os clientes a tomar
            uma decisão informada sobre contratar ou não o advogado. Um site
            também pode ser uma plataforma útil para o advogado se comunicar com
            clientes atuais e potenciais. Por exemplo, o advogado pode usar o
            site para fornecer informações sobre o andamento de um caso ou para
            responder a perguntas frequentes. Em resumo, um site pode ser uma
            ferramenta valiosa para qualquer advogado que queira promover seus
            serviços, estabelecer credibilidade e se comunicar com os clientes.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Qual vantagem de criar um site totalmente personalizado para
              oferecer meus serviços advocatícios?
            </summary>
            <ul className=" list-disc">
              <li>
                Personalização: Um site personalizado permite que um escritório
                de advocacia crie uma aparência única que reflita sua marca e
                seus valores. Isso pode ajudar a diferenciar a empresa de outras
                no mercado e construir credibilidade e confiança com os
                clientes.
              </li>
              <li>
                Flexibilidade: Um site personalizado dá ao escritório de
                advocacia o controle total sobre o design, o conteúdo e as
                funcionalidades do site. Isso permite que o escritório adicione
                ou remova recursos conforme necessário, sem ser limitado pelas
                opções pré-definidas de um template.
              </li>
              <li>
                Otimização para SEO: Criar um site personalizado permite que o
                escritório de advocacia otimize o site de acordo com as
                palavras-chave e as práticas de SEO relevantes para o negócio.
                Isso pode ajudar o site a se posicionar melhor nos resultados de
                busca e a atrair mais tráfego orgânico.
              </li>
              <li>
                Experiência do usuário: Um site personalizado pode ser projetado
                de forma a fornecer aos visitantes uma experiência de usuário
                mais agradável e intuitiva. Isso pode aumentar a probabilidade
                de os visitantes se tornarem clientes e de eles recomendarem o
                escritório de advocacia para outras pessoas.
              </li>
            </ul>
            Em resumo, criar um site personalizado para um escritório de
            advocacia pode oferecer mais personalização, flexibilidade,
            otimização para SEO e uma experiência do usuário melhor do que um
            site baseado em um template pré-definido.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              O que é uma Landing Page?
            </summary>
            Uma landing page é uma página da web projetada para converter
            visitantes em clientes potenciais, geralmente através da realização
            de uma ação, como preencher um formulário ou fazer um pedido. As
            landing pages são geralmente usadas como parte de uma estratégia de
            marketing digital, para direcionar tráfego para uma página
            específica de um site a partir de anúncios online, e-mails ou links
            em redes sociais. O objetivo de uma landing page é capturar
            informações sobre os visitantes, como o nome, o endereço de e-mail
            ou o número de telefone, de modo a poder entrar em contato com eles
            posteriormente. As landing pages também podem ser usadas para vender
            produtos ou serviços diretamente, oferecendo aos visitantes a opção
            de fazer um pedido ou se inscrever para receber mais informações. Em
            resumo, a função principal de uma landing page é converter
            visitantes em clientes potenciais, oferecendo-lhes algo de valor em
            troca de suas informações de contato.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Em quanto tempo o site fica pronto?
            </summary>
            Após a aprovação do Layout, o site ficará pronto em até 5 dias
            úteis.
          </details>

          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              É possível que vocês redigiam os textos iniciais do site
              (descrição do escritório, áreas de atuação, etc )?
            </summary>
            Sim, porém há custo adicional. Entre em contato para acertarmos
            valores.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Ainda não tenho o domínio registrado (www.seusite.com.br), o que
              devo fazer?
            </summary>
            Nossa equipe oferecerá todo o suporte para você adquirir um dominío
            na internet. Indicaremos diversas opções de site de dominios,
            ficando a seu critério a escolha. A titulo de exemplo, os valores de
            um dominío variam entre R$ 50,00 a R$ 150,00 anuais no google
            domains.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Quais as formas de pagamento?
            </summary>
            Aceitamos PIX e Cartão de Crédito.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Tenho alguma garantia que vou receber meu site no prazo?
            </summary>
            Além do contrato, você pode optar por comprar diretamente em anúncio
            no Mercado Livre, garantindo toda a proteção que a plataforma
            oferece.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Há algum valor mensal a ser pago?
            </summary>
            Não, você só pagará pela manutenção do site caso deseje fazer alguma
            modificação como troca de uma imagem ou mudança no layout.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Vocês fornecem o código fonte do site desenvolvido?
            </summary>
            Sim, fornecemos o código fonte para, caso você deseje, possa migrar
            para outra plataforma ou outros desenvolvedores.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Há um página ou espaço apropriado para eu postar notícias ou
              minhas próprias postagens?
            </summary>
            Sim, em todas as opções ofertadada, há um espaço apropriado para
            postagens. Basta você nos enviar o texto e colocaremos em até 2 dias
            úteis no site, sem custo adicional.
          </details>
          <details className=" text-lg leading-loose my-4">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Preciso fornecer o acesso do meu WhatsApp para automatizar?
            </summary>
            Você receberá todas as orientações para que o programa rode em seu
            próprio PC, garantindo que não teremos acesso a nenhuma mensagem.
          </details>
        </section>
      </div>
      <footer className=" bg-secondary/20 justify-around items-center flex  text-[#000000] h-80 text-lg">
        <h2>AdvogWeb Brasil</h2>
        <ul>
          <li>Menu</li>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
        <ul>
          <li>WhatsApp</li>
        </ul>
      </footer>
    </main>
  );
}
