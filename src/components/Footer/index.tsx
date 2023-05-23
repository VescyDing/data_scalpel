import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    // defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'gdmp-demo.gistack.cn',
          title: '捷泰云际时空数据中台',
          href: 'https://gdmp-demo.gistack.cn/',
          blankTarget: true,
        },
        {
          key: 'gisstack',
          title: <GithubOutlined />,
          href: 'https://github.com/gisstack',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
