import { Button, Card, Container } from "react-bootstrap";
import { IProduto } from "../../services/produto.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css"; // Importe seu arquivo CSS aqui

interface GridViewProps {
  data: IProduto[];
  onProductClicked: (produto: IProduto) => void;
}

export default function ProductListGrid(props: GridViewProps) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {props.data.map((produto) => {
        const avaliable = produto.estoque > 0;

        return (
          <div key={produto.id}>
            <Card className={`custom-card ${avaliable ? "" : "disabled"}`}>
              <Card.Img
                variant="top"
                src="https://coyote.ca/wp/wp-content/uploads/2013/09/generic_brands_web_700x650.jpg"
                alt="Produto"
              />
              <Card.Body style={{ padding: 0 }}>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>R$ {produto.preco}</Card.Text>

                <Button
                  variant="primary"
                  className="w-100"
                  disabled={!avaliable}
                  onClick={() => avaliable && props.onProductClicked(produto)}
                >
                  <div>
                    {avaliable ? (
                      <>
                        Carrinho
                        <FontAwesomeIcon
                          icon={faCartArrowDown}
                          style={{
                            paddingLeft: 5,
                          }}
                        />
                      </>
                    ) : (
                      "Indisponível"
                    )}
                  </div>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Container>
  );
}
