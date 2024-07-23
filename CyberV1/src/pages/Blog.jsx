/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EBC from "../assets/assetsV4/enesbugracengiz.jpg";
import Figure from "react-bootstrap/Figure";
import Nav from "react-bootstrap/Nav";

const Blog = () => {
  return (
    <>
      <Container style={{ width: "100%" }}>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center p-3 m-3">
            <h1>Enes Buğra Cengiz</h1>
            <span className="p-3 m-3">
              Atatürk Üniversitesi Bilgisayar Mühendisliği bölümünden 2023
              yılında mezun oldum. Full stack programlama alanında kendimi
              geliştirmekteyim ve HTML, CSS, Javascript, React Js, C#, .NET
              Core, Windows Forms, Python ve Java dillerinde projeler
              geliştirdim. Takım çalışmasına yatkın biriyim ve sürekli gelişimi
              hedefliyorum. Bilgisayar mühendisliği eğitimim sayesinde geniş bir
              teknoloji yelpazesini kavrayabiliyor, projelerimi başarıyla
              tamamlıyorum. İyi iletişim becerilerimle ekip içinde etkili bir
              şekilde iletişim kurabiliyor ve işbirliğini güçlendirebiliyorum.
              Geniş bir perspektife sahip olan bilgi birikimim, hem frontend hem
              de backend geliştirmede avantaj sağlıyor. HTML, CSS, Javascript,
              React Js, C#, .NET Core ve Windows Forms konularında ileri düzeyde
              bilgi sahibi olmanın yanı sıra Python ve Java dilleriyle farklı
              platformlarda uygulamalar geliştirebiliyorum.Veritabanı
              sistemlerinde de yetenekliyim ve MSsql ve PostreSql sistemlerini
              kolayca kullanabiliyorum. API ve web servislerindeki deneyimim ile
              veri gönderme ve veri çekme işlemlerini etkin bir şekilde
              gerçekleştirebiliyorum. 2022 yılında Hopfrög Kids adlı bir
              firmanın e-ticaret departmanında yazılım geliştirici olarak görev
              aldım. Bu süreçte aynı zamanda iş geliştirme sürecine de katıldım
              ve iş bilgilerini yazılım sistemlerine başarılı bir şekilde
              uyguladım. İş analizi konusundaki yeteneklerimle projeleri baştan
              sona analiz ederek dokümantasyon sürecini yönettim. Gereksinimleri
              belirleyerek ilgili iş birimlerini doğru şekilde yönlendirip
              projelerin başarılı bir şekilde ilerlemesini sağladım.Ayrıca
              Momende Bilişim adlı bir firmada donanım stajı yaparak elektronik
              sistemlerin temelini öğrendim. Bu sayede yerel sunucularda
              çıkabilecek sorunları hızlı bir şekilde tespit edebilip uygun
              aksiyonları alabiliyorum. Bunların yanında spor olarak Kayak
              yaptım, bu bana hızlı hareket yeteneği ve hatalardan ders
              çıkarmayı öğreterek özgüvenimi sağlamlaştırdı. Kayak sporu her ne
              kadar bireysel ve tek başına yapılan bir spormuş gibi görünse de
              sosyalleşmeme olumlu katkısı oldu ve fiziksel olduğu kadar
              zihinsel olarak da kendimi geliştirme fırsatı verdi.Hızla adapte
              olabilen ve yeni teknolojileri öğrenmeye istekli biriyim. Sürekli
              kendimi geliştirme arzum ve proaktif yaklaşımım ile iş hayatında
              başarıyla ilerlemeyi hedefliyorum.
            </span>
            <Figure className="m-3 p-3">
              <Figure.Image width={500} height={500} alt="100x100" src={EBC} />
            </Figure>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Col className="d-flex flex-row m-3 p-3">
                  <Nav.Link
                    href="https://github.com/ebcengiz"
                    className="text-bg-dark"
                    style={{ marginRight: "25%" }}
                  >
                    GitHub
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.linkedin.com/in/enesbugracengiz/"
                    className="text-bg-dark"
                  >
                    LinkedIn
                  </Nav.Link>
                </Col>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
