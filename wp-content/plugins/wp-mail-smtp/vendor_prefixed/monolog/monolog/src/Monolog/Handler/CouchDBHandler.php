<?php

/*
 * This file is part of the Monolog package.
 *
 * (c) Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace WPMailSMTP\Vendor\Monolog\Handler;

use WPMailSMTP\Vendor\Monolog\Formatter\JsonFormatter;
use WPMailSMTP\Vendor\Monolog\Logger;
/**
 * CouchDB handler
 *
 * @author Markus Bachmann <markus.bachmann@bachi.biz>
 */
class CouchDBHandler extends \WPMailSMTP\Vendor\Monolog\Handler\AbstractProcessingHandler
{
    private $options;
    public function __construct(array $options = array(), $level = \WPMailSMTP\Vendor\Monolog\Logger::DEBUG, $bubble = \true)
    {
        $this->options = \array_merge(array('host' => 'localhost', 'port' => 5984, 'dbname' => 'logger', 'username' => null, 'password' => null), $options);
        parent::__construct($level, $bubble);
    }
    /**
     * {@inheritDoc}
     */
    protected function write(array $record)
    {
        $basicAuth = null;
        if ($this->options['username']) {
            $basicAuth = \sprintf('%s:%s@', $this->options['username'], $this->options['password']);
        }
        $url = 'https://' . $basicAuth . $this->options['host'] . ':' . $this->options['port'] . '/' . $this->options['dbname'];
        $context = \stream_context_create(array('http' => array('method' => 'POST', 'content' => $record['formatted'], 'ignore_errors' => \true, 'max_redirects' => 0, 'header' => 'Content-type: application/json')));
        if (\false === @\file_get_contents($url, null, $context)) {
            throw new \RuntimeException(\sprintf('Could not connect to %s', $url));
        }
    }
    /**
     * {@inheritDoc}
     */
    protected function getDefaultFormatter()
    {
        return new \WPMailSMTP\Vendor\Monolog\Formatter\JsonFormatter(\WPMailSMTP\Vendor\Monolog\Formatter\JsonFormatter::BATCH_MODE_JSON, \false);
    }
}
