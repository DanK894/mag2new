<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 *
 * Created By : Rohan Hapani
 */
namespace Order\Cancel\Setup;

use Magento\Framework\DB\Ddl\Table;
use Magento\Framework\Setup\InstallSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;


class InstallSchema implements InstallSchemaInterface
{
    /**
     * @param SchemaSetupInterface $setup
     * @param ModuleContextInterface $context
     * @return void
     * @throws \Zend_Db_Exception
     */
    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {

        $installer = $setup;

        $installer->startSetup();
        /**
         * Create table 'order_table'
         */
        if (!$installer->tableExists('order_table')) {     //'order_blog'
            $table = $installer->getConnection()->newTable(
                $installer->getTable('order_table')
            )->addColumn(
                'order_id',   //'blog_id'
                Table::TYPE_INTEGER,
                null,
                [
                    'identity' => true,
                    'nullable' => false,
                    'primary' => true,
                    'unsigned' => true,
                ],
                'Id'

            )->addColumn(
                'cancel_order_id',   //'blog_id'
                Table::TYPE_TEXT,
                255,
                [
                     'nullable' => false,
                ],
                'Canceled Order Id'

            )->addColumn(
                'cancel_reason',       //'blog_title'
                Table::TYPE_TEXT,
                255,
                [
                    'nullable' => false,
                ],
                'Cancellation Reason'
            )->addColumn(
                'comment',   //'blog_description',
                Table::TYPE_TEXT,
                '2M',
                [],
                'Comment'
            )->addColumn(
                'status',        //'status'
                Table::TYPE_SMALLINT,
                null,
                [
                    'nullable' => false,
                ],
                'Status'
            )->addColumn(
                'canceled_by',     //'created_at'
                Table::TYPE_BLOB,
                255,
                [
                    'nullable' => false,
                 ],
                'Canceled by'
            )->setComment('Order Table');         //'Blog Table'
            $installer->getConnection()->createTable($table);
        }
        $installer->endSetup();
    }
}
