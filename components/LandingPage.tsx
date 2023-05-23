import React from "react";
import H2 from "components/Styling/H2";
import P from "components/Styling/P";
import Card from "components/Styling/Card";
import AdSense from "components/AdSense";

export default function LandingPage() {
  return (
    <>
      <div className="isolated flex flex-col bg-gray-100 pt-24 justify-center text-center">
        <div className="pt-24 pb-10 justify-center align-middle">
          <Card className="h-48">
            <AdSense />
          </Card>
          <div className="mb-8">
            <H2 className="pb-10">OpenHeal: Soluções OpenSource para saúde.</H2>
            <P>
              A OpenHeal é um projeto inovador e colaborativo que tem como
              objetivo criar soluções de saúde acessíveis e de alta qualidade
              por meio de tecnologia opensource.
            </P>
            <P>
              Trabalharemos em varios projetos para fornecer soluções inovadoras
              em diversas áreas da saúde.
            </P>
            {/* <P>Nossas soluções serão desenvolvidas em linguagens de programação como Python, Node e Typescript, usando frameworks modernos como Next.js.</P> */}
            <P>
              Acreditamos que o compartilhamento de conhecimentos e recursos é
              fundamental para o avanço da saúde em todo o mundo.
            </P>
            <P>
              Nosso objetivo é democratizar o acesso à tecnologia de ponta na
              área da saúde, permitindo que mais pessoas possam se beneficiar de
              soluções inovadoras e de alta qualidade.
            </P>
            <P>
              Junte-se a nós nesta jornada emocionante e ajude-nos a criar um
              futuro mais saudável e conectado.
            </P>
          </div>
          <link-button color="secondary">SAIBA MAIS</link-button>
        </div>

        <div className="bg-gray-200 pb-10 ">
          <div className="mb-8">
            <H2 className="pt-10">
              Inteligência Artificial para desburocratizar o atendimento de
              profissionais de saúde.
            </H2>

            <P>
              Usando frameworks de código aberto, juntamente com várias APIs de
              inteligência artificial, tanto pagas quanto públicas, podemos
              alcançar resultados que há alguns anos atrás pareceriam
              inimagináveis.
            </P>
            <P>
              Essas ferramentas oferecem a oportunidade de explorar e aplicar
              avanços em aprendizado de máquina e processamento de linguagem
              natural para resolver problemas do dia a dia.
            </P>
            <P>
              Com a colaboração e a inovação contínuas dessas comunidades,
              podemos esperar avanços ainda mais surpreendentes no futuro.
            </P>
          </div>

          <link-button color="secondary">SAIBA MAIS</link-button>
        </div>

        <div className="pb-10">
          <div className="mb-8">
            <H2 className="pt-10">
              BlockChain privado: Banco de dados descentralizado e
              criptografado.
            </H2>
            <P>
              Centrado no paciente, permitirá rodar as informaçõe do lado do
              cliente evitando demoras em conexões lentas e agilidade no acesso
              a informações.
            </P>
          </div>
          <link-button color="secondary">SAIBA MAIS</link-button>
        </div>

        <div className="bg-gray-200 pb-10 ">
          <H2 className="pt-10">Lab ou Prod:</H2>

          <P>
            Todo projeto terminado em Lab será apenas para fins de
            desenvolvimento.
          </P>
          <P>
            Os projetos Labs são repositórios de ideias e um ambiente para
            desenvolvimento e teste de conceitos.{" "}
          </P>
          <P>
            Antes de utilizar as ferramentas de maneira definiva devemos leva-la
            ao limite...
          </P>
          <P>
            <strong>
              Portanto, não a use para fins reais até que seja liberada uma
              versão Prod
            </strong>
          </P>
        </div>
        <div className="pb-10">
          <H2 className="pt-10">InbodyS10 Lab</H2>
          <P>
            Solução para gerarção de relatórios de bioimpedância a partir do
            arquivo CSV da inbodyS10
          </P>
          <P>
            {" "}
            Todo projeto roda no lado cliente sem a necessidade das informações
            passarem por algum servidor.
          </P>
          <P>
            {" "}
            Isso aumenta a segurança das informações e agiliza o tempo de
            resposta do sistema.
          </P>
          <P>
            {" "}
            Será monetizado com AdSense e posteriormente será construido versão
            paga sem anuncios.
          </P>

          <P>
            <b>Projeto ainda em fase Lab</b>
          </P>
          <div
            className="mt-8"
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: "1rem",
            }}
          >
            <a href="/inbodyS10">
              <link-button color="secondary">SAIBA MAIS</link-button>
            </a>
            <a href="inbodyS10">
              <link-button color="primary">ACESSAR</link-button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
