import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const About = () => {

    return (

        <AboutStyle>
            <Header />
            
           <h1>Acerca de Nosotros</h1>

           <p>Somos <b>Johnny Cash Vinilos</b> y queremos que nuestro cariño por la música y los coleccionables lleguen hasta sus hogares. Para ello tenemos como premisa el compromiso de brindar la mejor atención posible dentro de todos nuestros canales de comunicación.
            Desde ya esperemos que nos acompañen en este proyecto que surgio primeramente como un sueño o una idea lejana y que hoy tenemos la posilibidad de poder finalmente plasmarlo en realidad.
            Atte. El equipo de Johnny Cash Vinilos. </p>

 
            <p><b>¿CÓMO SE EVALÚA EL ESTADO DE LOS VINILOS USADOS?</b></p>
                <p>
                    La Escala de Goldmine, es un sistema de graduación internacional que se utiliza para establecer el estado de los discos de vinilo y sus tapas. El criterio es unificar todas las posibilidades en relación al estado de los discos en un sistema que va desde el mejor (discos nuevos) hasta el peor estado posible (discos rotos, o en muy mal estado).

                    Ten en cuenta que la escala es aplicada por humanos y por lo mismo es un estándar que se basa en la buena fe y el criterio de los vendedores.

                    Ahora veamos, vayamos de mejor a peor...
                </p>
                
            <p><b>MINT (M) (Como nuevo): </b>
                 Un disco Mint es un disco perfecto en todos los sentidos. Se trata de un disco que nunca ha sido usado y hasta puede estar cerrado. Por la dificultad de que un disco esté en ese estado, se usa muy rara vez para discos usados, sería como "la condición ideal".⁣ (M = 96% - 100%)
            </p>
            <p>
            <b>NEAR MINT (NM o M-) (Casi nuevo): </b> 
            Se trata de un disco que posiblemente no se haya usado, o que se haya reproducido un par de veces. No debe mostrar signos de desgaste. La portada no debe tener signos de manipulación visibles como pliegues, separación de juntas, agujeros y otros defectos. Lo mismo para sobres internos, inserts, pósters, etc.⁣ (NM= 90% - 95%)
            </p>
            <p>
            <b>VERY GOOD + (Mejor que Muy Bueno): </b> 
            Un disco VG+ tiene signos de haber sido reproducido anteriormente, pero también se nota que el dueño anterior lo manejó con cuidado. El disco puede tener algunos signos de desgaste o rozaduras/rayones/deformaciones leves siempre que no afecten la escucha. El agujero central no se debe haber deformado por muchas reproducciones. Con respecto a la carátula, inserts, etc. pueden tener signos de poco visibles desgaste, algún pliegue leve propio del uso.⁣ (VG+ = 80% - 89%)
            </p>
            <p>
            <b>VERY GOOD (Muy Bueno): </b>En un VG, los defectos mencionados antes serán más evidentes, o en mayor cantidad. Se escuchará algo de fritura, sobre todo en partes silenciosas o suaves, pero no todo el tiempo. Se notará más desgaste en el surco y podrá tener algunos rayones que afecten parcialmente la escucha. La etiqueta, portada, inserts, etc. podrán tener algo escrito o cinta. Sin embargo, para considerarse VG, no podrá tener todo esto al mismo tiempo: solo 2 o 3 defectos.⁣ (VG= 70% - 79%)
            </p>
            <p>
            <b>GOOD (G) (Bueno) y GOOD + (Más que bueno): </b>Bueno significa eso, bueno. Se puede reproducir sin saltos, pero seguramente tendrá fritura, rayones significativos y desgaste visible. La portada puede comenzar a dividirse en algunas secciones. Bastante más presencia de cintas, escritura y otros defectos. (G= 40% - 69%)
            </p>
            <p>
            <b>FAIR (F) (Aceptable) y Poor (P) (Mala condición): </b>La linea entre ambas es muy delgada y depende de la cantidad o gravedad de los defectos. El disco puede estar agrietado, deformado y/o presenta saltos o repeticiones. La portada tendrá muchos defectos visibles como escritura, cintas, etc. o directamente apenas mantiene el disco en su interior. (F/P= 0% - 39%)⁣⁣
            </p>
            <p>
            <b>Importante! </b>
            Portada y Disco siempre se califican de manera separada, aunque por lo general es muy raro ver un disco NM en una tapa P por ejemplo ya que el cuidado y estado van muchas veces de la mano. De todos modos, ya sea que compres o vendas, siempre es importante ver el estado de ambos. Además, en los usados, el estado es un factor importantísimo en el precio!
            </p>
            



        </AboutStyle>
    )
}

export default About

const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    
    h1{
        font-size: 2.5rem;
        margin-top: 50px;
        text-align: center;
    }
    p{
        text-align: left;
        font-size: 1.5rem;
        margin: 30px 30px 0px 30px;
    }
`

















