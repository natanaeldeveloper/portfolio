import { Skeleton, Tooltip } from "antd"
import CIcon from "@coreui/icons-react"
import {
  cibLaravel,
  cibJquery,
  cibBootstrap,
  cibMysql,
  cibPostgresql,
  cibReact,
  cibCss3,
  cibHtml5,
} from '@coreui/icons'

import {
  Container,
  Content,
  myPhotoClass,
  SkillArea,
  SkillItemCss,
} from "./style"

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Content>
        <Skeleton.Image className={myPhotoClass()} />
        <p>Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of
          Lorem Ipsum.

          <SkillArea>
            <Tooltip title="Laravel" color={'#F55247'}>
              <span>
                <CIcon
                  icon={cibLaravel}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#F55247', border: '1px solid #F55247' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="JQuery" color={'#0769ad'}>
              <span>
                <CIcon
                  icon={cibJquery}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#0769ad', border: '1px solid #0769ad' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="Bootstrap" color={'#6610f2'}>
              <span>
                <CIcon
                  icon={cibBootstrap}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#6610f2', border: '1px solid #6610f2' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="MySQL" color={'#3E6E93'}>
              <span>
                <CIcon
                  icon={cibMysql}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#3E6E93', border: '1px solid #3E6E93' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="PostgreSQL" color={'#336791'}>
              <span>
                <CIcon
                  icon={cibPostgresql}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#336791', border: '1px solid #336791' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="React" color={'#61dafb'}>
              <span>
                <CIcon
                  icon={cibReact}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#61dafb', border: '1px solid #61dafb' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="CSS3" color={'#2965f1'}>
              <span>
                <CIcon
                  icon={cibCss3}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#2965f1', border: '1px solid #2965f1' } } })}
                />
              </span>
            </Tooltip>

            <Tooltip title="HTML5" color={'#F06529'}>
              <span>
                <CIcon
                  icon={cibHtml5}
                  className={SkillItemCss({ css: { '&:hover': { fill: '#F06529', border: '1px solid #F06529' } } })}
                />
              </span>
            </Tooltip>
          </SkillArea>

        </p>
      </Content>
    </Container>
  )
}

export default AboutMe