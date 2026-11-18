"""add company intelligence tables

Revision ID: 001
Revises: None
Create Date: 2026-11-18 10:30:00.000000

"""
from alembic import op
import sqlalchemy as sa


def upgrade():
    op.create_table(
        'companies',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('legal_name', sa.String(), nullable=True),
        sa.Column('website', sa.String(), nullable=True),
        sa.Column('description', sa.String(), nullable=True),
        sa.Column('industry', sa.String(), nullable=True),
        sa.Column('sector', sa.String(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_companies_id'), 'companies', ['id'], unique=False)
    op.create_index(op.f('ix_companies_name'), 'companies', ['name'], unique=False)

    op.create_table(
        'funding_rounds',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('company_id', sa.Integer(), nullable=True),
        sa.Column('round_name', sa.String(), nullable=True),
        sa.Column('amount', sa.Float(), nullable=True),
        sa.Column('date', sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(['company_id'], ['companies.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_funding_rounds_id'), 'funding_rounds', ['id'], unique=False)

    op.create_table(
        'financial_records',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('company_id', sa.Integer(), nullable=True),
        sa.Column('revenue', sa.Float(), nullable=True),
        sa.Column('ebitda', sa.Float(), nullable=True),
        sa.Column('reporting_period', sa.String(), nullable=True),
        sa.ForeignKeyConstraint(['company_id'], ['companies.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_financial_records_id'), 'financial_records', ['id'], unique=False)


def downgrade():
    op.drop_index(op.f('ix_financial_records_id'), table_name='financial_records')
    op.drop_table('financial_records')
    op.drop_index(op.f('ix_funding_rounds_id'), table_name='funding_rounds')
    op.drop_table('funding_rounds')
    op.drop_index(op.f('ix_companies_name'), table_name='companies')
    op.drop_index(op.f('ix_companies_id'), table_name='companies')
    op.drop_table('companies')
